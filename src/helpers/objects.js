/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * @license   https://github.com/facebook/fbjs/blob/master/LICENSE
 *
 * @see       https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/shallowEqual.js
 * @see       https://github.com/facebook/fbjs
 *
 * Why copying this file here instead of using "fbjs" package?
 * >If you are consuming the code here and you are not also a Facebook project,
 * be prepared for a bad time. APIs may appear or disappear and we may not
 * follow semver strictly, though we will do our best to. This library is
 * being published with our use cases in mind and is not necessarily meant
 * to be consumed by the broader public.
 */
const hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Inlined Object.is polyfill to avoid requiring consumers ship their own.
 *
 * @see     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 *
 * @param   {mixed}   x
 * @param   {mixed}   y
 * @return  {boolean}
 */
export function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 *
 * @param   {mixed}   objA
 * @param   {mixed}   objB
 * @return  {boolean}
 */
export function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (
    typeof objA !== 'object' ||
    objA === null ||
    typeof objB !== 'object' ||
    objB === null
  ) {
    return false;
  }

  const keysA = Object.keys(objA);
  const keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let i = 0; i < keysA.length; i++) {
    if (
      !hasOwnProperty.call(objB, keysA[i]) ||
      !is(objA[keysA[i]], objB[keysA[i]])
    ) {
      return false;
    }
  }

  return true;
}

/**
 * Checks whether two arrays are identical.
 *
 * @param   {Array<mixed>}  arrA
 * @param   {Array<mixed>}  arrB
 * @return  {boolean}
 */
export function arraysEqual(arrA = [], arrB = []) {
  if (arrA.length !== arrB.length) {
    return false;
  }

  for (let i = arrA.length; i--; ) {
    if (arrA[i] !== arrB[i]) return false;
  }

  return true;
}
