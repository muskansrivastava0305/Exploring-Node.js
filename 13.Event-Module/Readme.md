# Event Module - Node.Js
***EventEmitter*** is a core module in node.js used to create and handle custom events.

It is part of the events module and is often used for building event-driven systems in Node.js.

### Key Methods

**1. emit(evenName,[args])**

```Purpose:``` Emits(or triggers) an event with the specific eventName. You can also pass arguments that will be consumed by the listeners.

it's like calling a function , but instead , it triggers all listeners(function) attached to the specific event .

**2. on (eventName, listener)**

```Purpose:``` Attaches a listener(a function) to a specific eventName . This listener will be execute when the event is emitted 
