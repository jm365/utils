import { isArray as isArrayFn , isObject as isObjectFn, isUndef as isUndefFn} from './typeCheck'

export default {
  isArray: isArrayFn,
  isObject: isObjectFn,
  isUndef: isUndefFn
}

export const isArray = isArrayFn
export const isObject = isObjectFn
export const isUndef = isUndefFn
