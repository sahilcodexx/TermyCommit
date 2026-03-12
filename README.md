<p align="center">
  <img src="./web/public/Tcxcommit.svg" alt="termyCommit" width="300" />
</p>

<h1 align="center">Never write commit messages manually</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/tcxcommit">
    <img src="https://img.shields.io/npm/v/tcxcommit?style=flat&color=yellow" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/tcxcommit">
    <img src="https://img.shields.io/npm/dt/tcxcommit?style=flat&color=blue" alt="npm downloads" />
  </a>
  <a href="https://github.com/sahilcodexx/termyCommit/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/tcxcommit?style=flat" alt="license" />
  </a>
  <a href="https://github.com/sahilcodexx/termyCommit/issues">
    <img src="https://img.shields.io/github/issues/sahilcodexx/termyCommit?style=flat&color=red" alt="issues" />
  </a>
</p>

<p align="center">
  <b>AI-powered git commit message generator</b> • Write meaningful commit messages in seconds
</p>

---

## ✨ Features

- 🤖 **AI-Powered** - Generates smart commit messages using OpenRouter AI
- 📝 **Conventional Commits** - Follows standard format (feat:, fix:, docs:, etc.)
- 🔑 **Free to Start** - 5 free trials included, no API key needed
- 🔐 **Your Own Key** - Use personal OpenRouter API key for unlimited usage
- ⚡ **Auto-Stage** - Automatically stages changes before generating
- 🚀 **Push Support** - Option to push to remote after commit
- 🎨 **Beautiful CLI** - Clean, colorful terminal interface

---

## 📦 Installation

```bash
npm install -g tcxcommit
```

Or use directly with npx:

```bash
npx tcxcommit
```

---

## 🚀 Quick Start

```bash
# Just run in your git repository
tcxcommit
```

That's it! Follow the prompts and let AI write your commit messages.

---

## 📖 Usage

```
1. Run tcxcommit in your project
2. Choose API option (free trials or your own key)
3. AI generates a commit message
4. Accept, regenerate, or exit
5. Optionally push to remote
```

### Demo

```
termyCommit v1.0.3 — AI commit helper

Continue? [Y/n] y

Free trials remaining: 5

Choose API option:
  1. Use my own API key
  2. Use free trials (5 left)

> Use free trials

⠋ Generating commit message...

┌──────────────────────────────────────────────────┐
│                                                  │
│   feat: Add user authentication module           │
│   - Implement JWT-based login                    │
│   - Add password hashing with bcrypt             │
│   - Create auth middleware                       │
│                                                  │
└──────────────────────────────────────────────────┘

Choose:
  1. Accept & Commit
  2. Regenerate
  3. Exit
```

---

## 🔑 API Key Setup

### Option 1: Free Trials (Default)
- 5 free commits without any setup
- Uses OpenRouter's free model
- Perfect for trying it out

### Option 2: Your Own API Key
1. Get a free API key from [OpenRouter.ai](https://openrouter.ai/keys)
2. Run `tcxcommit`
3. Select "Use my own API key"
4. Enter your key
5. Saved automatically for future use

Your key stays local and is never shared!

---

## ⚙️ Requirements

- Node.js 18+
- Git installed
- Internet connection (for AI)

---

## 🛠️ Tech Stack

- **Node.js** - Runtime
- **TypeScript** - Language
- **OpenRouter** - AI API
- **Chalk** - Terminal styling
- **Prompts** - Interactive CLI

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a [Pull Request](https://github.com/sahilcodexx/termyCommit/pulls).

---

## 📄 License

[ISC](https://github.com/sahilcodexx/termyCommit/blob/main/LICENSE)

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/sahilcodexx">sahilcodexx</a>
</p>
