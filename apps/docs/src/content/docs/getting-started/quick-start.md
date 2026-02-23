---
title: Quick Start
description: Get up and running with Minions Stakeholders in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-stakeholders/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_stakeholders import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
stakeholders info
```
