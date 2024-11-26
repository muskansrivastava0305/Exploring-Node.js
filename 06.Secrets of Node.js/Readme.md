# Node.js Context - Global
- ```In Node.js, there's no window or document. why?``` Because Node.js runs outside the browser-it doesn't deal with the DOM or browser-specific APIs.

- Instead , Node.js has a ```global object```. It's the equivalent of window in the browser but designed for a server-side environment.


## globalThis
globalThis is a new feature introduction in EcmaScript 2020(ES11) that provides a stands way to access the global object in any JavaScript environment.

**Why is it useful?**

- Consistent Access: In the past , accessing the global object varied depending on the environment:
1. Browser: window
2. Node.js : Global
3. Web workers: self 
4. Other Environment: Might have their own global objects


### Built In Modules In NodeJS
```Module Name --------- Usage```

    OS   ---- Provides information about the operating system

    PATH ---- Provides utility function for working with file paths

    FS   ---- File System Operations like Reading and writing files.

    HTTP ---- Create HTTP Servers