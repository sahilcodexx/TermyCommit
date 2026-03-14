import fs from "fs";
import os from "os";
import path from "path";
import prompts from "prompts";
import chalk from "chalk";

const envFreeTrials = Number(process.env.FREE_TRIALS ?? "10");
const DEFAULT_FREE_TRIALS = Number.isFinite(envFreeTrials)
  ? Math.max(0, Math.floor(envFreeTrials))
  : 10;
const ENV_TRIAL_KEY = (process.env.OPENROUTER_TRIAL_KEY ?? "").trim();
const CONFIG_DIR = path.join(os.homedir(), ".tcxcommit");
const CONFIG_FILE = path.join(CONFIG_DIR, "config.json");

interface Config {
  apiKey?: string;
  freeTrials: number;
}

function ensureConfigDir(): void {
  if (!fs.existsSync(CONFIG_DIR)) {
    fs.mkdirSync(CONFIG_DIR, { recursive: true });
  }
}

function createDefaultConfig(): Config {
  return { freeTrials: DEFAULT_FREE_TRIALS };
}

function normalizeConfig(data: unknown): Config {
  if (typeof data !== "object" || data === null) {
    return createDefaultConfig();
  }

  const parsed = data as Partial<Config>;
  const freeTrials =
    typeof parsed.freeTrials === "number" && Number.isFinite(parsed.freeTrials)
      ? Math.max(0, Math.floor(parsed.freeTrials))
      : DEFAULT_FREE_TRIALS;
  const apiKey =
    typeof parsed.apiKey === "string" && parsed.apiKey.trim()
      ? parsed.apiKey.trim()
      : undefined;

  return { freeTrials, apiKey };
}

function loadConfig(): Config {
  ensureConfigDir();
  if (!fs.existsSync(CONFIG_FILE)) {
    const config = createDefaultConfig();
    saveConfig(config);
    return config;
  }

  try {
    const data = fs.readFileSync(CONFIG_FILE, "utf-8");
    return normalizeConfig(JSON.parse(data));
  } catch {
    return createDefaultConfig();
  }
}

function saveConfig(config: Config): void {
  ensureConfigDir();
  const safeConfig: Config = {
    apiKey: config.apiKey?.trim(),
    freeTrials: Math.max(0, Math.floor(config.freeTrials)),
  };
  fs.writeFileSync(CONFIG_FILE, JSON.stringify(safeConfig, null, 2));
}

export function saveKey(key: string): void {
  const newKey = key.trim();
  if (!newKey) {
    return;
  }

  const config = loadConfig();
  config.apiKey = newKey;
  saveConfig(config);
}

async function promptSelect(
  message: string,
  choices: Array<{ title: string; value: string }>
): Promise<string> {
  const response = (await prompts({
    type: "select",
    name: "value",
    message,
    choices,
  })) as { value?: string };

  if (response.value === undefined) {
    throw new Error("canceled");
  }

  return response.value;
}

function showKeyInstructions(): void {
  console.log(chalk.cyan("\n  Get your free API key:"));
  console.log(chalk.gray("  https://openrouter.ai/keys\n"));
}

function showTrialKeyHint(): void {
  if (!ENV_TRIAL_KEY) {
    console.log(chalk.gray("\n  Set OPENROUTER_TRIAL_KEY in your environment to keep using the default trial flow."));
  }
}

async function promptForApiKey(config: Config): Promise<string> {
  showKeyInstructions();

  const response = (await prompts({
    type: "password",
    name: "apiKey",
    message: chalk.yellow("  Enter your OpenRouter API key:"),
  })) as { apiKey?: string };

  if (response.apiKey === undefined) {
    throw new Error("canceled");
  }

  const key = response.apiKey.trim();
  if (!key) {
    console.log(chalk.red("  API key required"));
    return promptForApiKey(config);
  }

  config.apiKey = key;
  saveConfig(config);
  console.log(chalk.green("  Key saved!\n"));

  return key;
}

export interface ApiKeyOptions {
  forceTrial?: boolean;
}

export async function getApiKey(options?: ApiKeyOptions): Promise<string> {
  const config = loadConfig();
  const savedKey = config.apiKey;
  const forceTrialEnv = process.env.TCXCOMMIT_FORCE_TRIAL === "1";
  const forceTrial = Boolean(options?.forceTrial) || forceTrialEnv;

  if (forceTrial && savedKey) {
    console.log(chalk.yellow("  Forced trial: ignoring saved API key\n"));
  }

  if (!forceTrial && savedKey) {
    const choice = await promptSelect(chalk.yellow("  Choose:"), [
      { title: chalk.green("Continue"), value: "continue" },
      { title: chalk.blue("Change API key"), value: "change" },
    ]);

    if (choice === "continue") {
      console.log(chalk.green("  Using your API key\n"));
      return savedKey;
    }

    return promptForApiKey(config);
  }

  const trialAvailable = Boolean(ENV_TRIAL_KEY);
  if (config.freeTrials > 0 && trialAvailable) {
    const choice = await promptSelect(chalk.yellow("  Choose:"), [
      {
        title: chalk.green(`Use free trial (${config.freeTrials} left)`),
        value: "free",
      },
      { title: chalk.blue("Add your API key"), value: "add" },
    ]);

    if (choice === "free") {
      config.freeTrials = Math.max(0, config.freeTrials - 1);
      saveConfig(config);
      console.log(chalk.cyan("  Using free trial\n"));
      return ENV_TRIAL_KEY;
    }
  } else if (config.freeTrials > 0) {
    console.log(chalk.red("  Free trial key is not configured."));
    showTrialKeyHint();
  } else {
    console.log(chalk.red("  Free trials exhausted!"));
  }

  return promptForApiKey(config);
}
