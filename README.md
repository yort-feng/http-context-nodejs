# HTTP Context NodeJS

Get and set request-scoped context anywhere, and use it in any framework.

## Installation

It requires node v8.2.1 or higher for ES2015 and async_hooks support.

```bash
$ npm i http-context-nodejs
```

## Quick start
### How to use it in [NestJS](https://nestjs.com/)

#### Set it in the MainJS
```js
...
import * as uuid from 'node-uuid';
import * as httpContext from 'http-context-nodejs'
...
// Use httpContext and set traceId to trace all the logs within a http request
  app.use((req: Request, res: Response, next: NextFunction) => {
    httpContext.scope();
    httpContext.set('traceId', uuid.v1());
    next();
  })
```

#### Use it in anywhere

```js
import * as httpContext from 'http-context-nodejs'
...
    const traceId = httpContext.get('traceId');
```

### How to use it in ExpressJS

#### Set it in the AppJS

```js
...
import * as uuid from 'node-uuid';
import * as httpContext from 'http-context-nodejs';
...
app.use((req, res, next) => {
    httpContext.scope();
    httpContext.set('traceId', uuid.v1());
    next();
});

```
### Use it in anywhere

```js
import * as httpContext from 'http-context-nodejs'
...
    const traceId = httpContext.get('traceId');
```

## How it works
### TODO
