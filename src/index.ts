import asyncHooks from 'async_hooks';

const httpContext = new Map();

asyncHooks.createHook({
  init (id, type, triggerId) {
    if (httpContext.has(triggerId)) {
        httpContext.set(id, httpContext.get(triggerId));
    }
  },
  /**
   * Remove the data
   */
  destroy (id) {
    if (!httpContext.has(id)) {
      return;
    }
    httpContext.delete(id);
  },
}).enable();

export function set (key: any, value: any) {
  const asyncId = asyncHooks.executionAsyncId();
  const store = httpContext.get(asyncId)
  if (store) {
    store.set(key, value)
  }
}

export function get (key: any) {
  const asyncId = asyncHooks.executionAsyncId();
  const store = httpContext.get(asyncId)
  if (store) {
    return store.get(key);
  }
}

export function scope () {
  const asyncId = asyncHooks.executionAsyncId();
  httpContext.set(asyncId, new Map());
}
