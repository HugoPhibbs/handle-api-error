# handle-api-error
- Micro package for handling api errors. Provides simple function to help with debugging errors within APIs

## Installation
```shell
npm install handle-api-error
```

## Usage
```typescript
const handleApiError = require('handle-api-error');

try {
    // Do something
} catch {
    throw handleApiError(error, "Doing something", 506, true); // Returns an error 
}

```

## API

### handleApiError(error, message, statusCode, expose)
- Handles an API error.
#### Params:
- error: Error that has been caught, that will be handled
- message: String message to be displayed in the error
- statusCode: Number status code to be displayed in the error, corresponds to a HTTP status code, default 400
- expose: Boolean if the error should be exposed to the user, default true

