![CI](https://github.com/mxn2020/minions-stakeholders-workspace/actions/workflows/ci.yml/badge.svg) ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

# minions-stakeholders

**Stakeholder registry, roles, and communication preferences**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-stakeholders/sdk minions-sdk

# Python
pip install minions-stakeholders

# CLI (global)
npm install -g @minions-stakeholders/cli
```

---

## CLI

```bash
# Show help
stakeholders --help
```

---

## Python SDK

```python
from minions_stakeholders import create_client

client = create_client()
```

---

## Project Structure

```
minions-stakeholders/
  packages/
    core/           # TypeScript core library (@minions-stakeholders/sdk on npm)
    python/         # Python SDK (minions-stakeholders on PyPI)
    cli/            # CLI tool (@minions-stakeholders/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [stakeholders.minions.help](https://stakeholders.minions.help)
- Blog: [stakeholders.minions.blog](https://stakeholders.minions.blog)
- App: [stakeholders.minions.wtf](https://stakeholders.minions.wtf)

---

## License

[MIT](LICENSE)
