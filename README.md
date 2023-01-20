# handle-api-error
- Micro package for handling api errors. Provides simple function to help with debugging errors within APIs

## Installation
```bash
```shell
npm install handle-api-error
```

## Usage
```typescript
const handleApiError = require('handle-api-error');

try {
    // Do something
} catch {
    throw handleApiError(error, "Doing something", 506); // Returns an error 
}

```

