(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.utils = factory());
}(this, function () { 'use strict';

  /*========================================================================
  * author: yxw
  * email: 270279036@qq.com
  * description: 数据类型判断
  * created: 20190828
  * lastModify: 20190828
  * ========================================================================*/

  /*
  * @func
  * @desc 判断一个数据类型是否为原始数据类型
  * @param {any} v
  * @return {bool} 数据类型是否为原始数据类型
  * */
  function isPrimitive(v) {
    const primitiveArr = ['string', 'number', 'symbol', 'boolean'];
    return primitiveArr.indexOf(typeof v) > -1;
  }

  /*
  * @func
  * @desc 判断一个数据类型是否为数组
  * @param {any} v
  * @return {bool} 数据类型是否为数组
  * */
  function isArray(v) {
    return toString.call(v) === '[object Array]';
  }

  /*
  * @func
  * @desc 判断一个数据类型是否为object
  * @param {any} v
  * @return {bool} 数据类型是否为object
  * */
  function isObject(v) {
    return toString.call(v) === '[object Object]';
  }

  /*
  * @func
  * @desc 判断一个数据类型是否为未定义
  * @param {any} v
  * @return {bool} 数据类型是否为未定义
  * */
  function isUndef(v) {
    return v === undefined || v === null;
  }

  /*
  * @func
  * @desc 判断一个数据是否为空，含未定义、空数组、空字符串、NaN
  * @param {any} v
  * @return {bool} 数据是否为空
  * */
  function isEmpty(v) {
    return isUndef(v) || v === [] || v === '' || v !== v;
  }

  /*
  * @func
  * @desc 判断一个方法是否为原生函数
  * @param {any} v
  * @return {bool} 方法是否为原生函数
  * */
  function isNative(v) {
    return typeof v === 'function' && /\{\s\[native code\]\s\}/.test(v.toString());
  }

  /*import { dateFormat } from "./date"
  import { deepClone } from './deepClone'*/

  var index = {
    isArray,
    isObject,
    isUndef,
    isEmpty,
    isPrimitive,
    isNative /*,
             dateFormat,
             deepClone*/
  };

  return index;

}));
