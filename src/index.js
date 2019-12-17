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
import { getUrlParams, formatObjToUrlQueryStr } from './url'
import { isIphoneX, isIOS } from "./runtimeCheck";
import { getElOffsetTop } from './getElOffsetTop'
import { getCookie, getAllCookies } from './cookie'


export default {
  formatObjToUrlQueryStr: formatObjToUrlQueryStr,
  getCookie: getCookie,
  getAllCookies: getAllCookies,
  getElOffsetTop: getElOffsetTop,
  isIOS: isIOS,
  isIphoneX: isIphoneX,
  isArray: isArray,
  isObject: isObject,
  isUndef: isUndef,
  isEmpty: isEmpty,
  isPrimitive: isPrimitive,
  isNative: isNative,
  dateFormat: dateFormat,
  deepClone: deepClone,
  getUrlParams: getUrlParams
}
