---
title: Event Loop
date: "2023-08-20"
tags: ["markdown", "code", "features"]
draft: false
summary: A self revision on the event loop in Javascript
---

## Understanding the Event Loop in JavaScript

When it comes to understanding the core of asynchronous programming in JavaScript, the concept of the "event loop" plays a pivotal role. It's what enables JavaScript to efficiently handle tasks such as fetching data from servers, animating elements on a webpage, and much more, all without blocking the main thread and providing a smooth user experience.

## What is the Event Loop?

At its essence, the event loop is the mechanism that allows JavaScript to perform non-blocking operations by delegating tasks to different queues. These queues include the **call stack**, **callback queue**, and **microtask queue**.

## How the Event Loop Works:

1. **Call Stack**: The call stack is where function calls are stacked and executed one after the other. When a function is called, it's added to the stack, and when the function completes, it's removed from the stack. However, if a function contains asynchronous operations (like fetching data), it won't block the entire program's execution.

2. **Callback Queue**: When asynchronous operations complete, they are placed in the callback queue. These operations are waiting for their turn to be executed. The event loop checks the call stack, and if it's empty, it moves the operations from the callback queue to the call stack for execution.

3. **Microtask Queue**: Microtasks are tasks that are given higher priority than regular tasks in the callback queue. This queue includes promises and other microtasks. Microtasks are executed before the next rendering cycle, ensuring faster updates to the user interface.

## Example:

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
```
