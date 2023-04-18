# 0x00-ES6_basic

This is the first task on the Alx Backend with Javascript, this task emphasizes javascript ES6 (ECMAScript 6), also known as ES2015 or ES6+.

## Learning Objectives

At the end of this task, I was able to learn :
- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters default to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Tasks

### 0. [Const or let]()
#### Description
Modify:

* function taskFirst to instantiate variables using const
* function taskNext to instantiate variables using let
```javascript
export function taskFirst() {
  var task = 'I prefer const when I can.';
  return task;
}

export function getLast() {
  return ' is okay';
}

export function taskNext() {
  var combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
```
#### Execution Example:
```shell
$ cat 0-main.js
import { taskFirst, taskNext } from './0-constants.js';

console.log(`${taskFirst()} ${taskNext()}`);

$
$ npm run dev 0-main.js
I prefer const when I can. But sometimes let is okay
$
```