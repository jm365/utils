import {
  isArray as isArrayFn ,
  isObject as isObjectFn,
  isUndef as isUndefFn,
  isEmpty as isEmptyFn,
  isPrimitive as isPrimitiveFn,
  isNative as isNativeFn
} from './typeCheck'

export const isNative = isNativeFn
export const isPrimitive = isPrimitiveFn
export const isArray = isArrayFn
export const isObject = isObjectFn
export const isUndef = isUndefFn
export const isEmpty = isEmptyFn
