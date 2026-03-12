import { execSync } from "child_process";
export function getGitDiff() {
    try {
        const hasChanges = execSync("git status --porcelain", {
            encoding: "utf-8",
        });
        if (!hasChanges || hasChanges.trim() === "") {
            return null;
        }
        execSync("git add .", { stdio: "ignore" });
        const diff = execSync("git diff --cached", {
            maxBuffer: 1024 * 1024 * 10,
            encoding: "utf-8",
        });
        if (!diff || diff.trim() === "") {
            return null;
        }
        return diff.slice(0, 6000);
    }
    catch (err) {
        const error = err;
        if (error.message.includes("not a git repository")) {
            throw new Error("Not a git repository");
        }
        if (error.message.includes("git: 'add' is not available")) {
            throw new Error("Git is not installed or not in PATH");
        }
        return null;
    }
}
export function commit(message) {
    const escapedMessage = message.replace(/"/g, '\\"').replace(/\n/g, '\\n');
    execSync(`git commit -m "${escapedMessage}"`, { stdio: "inherit" });
}
