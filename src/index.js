import {
  isArray,
  isObject,
  isUndef,
  isEmpty,
  isPrimitive,
  isNative
} from './typeCheck'
import { dateFormat } from "./date"
import { deepClone } from './deepClone'

export default {
  isArray: isArray,
  isObject: isObject,
  isUndef: isUndef,
  isEmpty: isEmpty,
  isPrimitive: isPrimitive,
  isNative: isNative,
  dateFormat: dateFormat,
  deepClone: deepClone
}
