/*========================================================================
* author: yxw
* email: 270279036@qq.com
* description: 数据类型判断
* created: 20190828
* lastModify: 20190828
* ========================================================================*/

/*
* @func
* @desc 判断一个数据类型是否为数组
* @param {any} v
* @return {bool} 数据类型是否为数组
* */
export function isArray(v:any): boolean {
  return toString.call(v) === '[object Array]'
}

/*
* @func
* @desc 判断一个数据类型是否为object
* @param {any} v
* @return {bool} 数据类型是否为object
* */
export function isObject(v:any): boolean {
  return toString.call(v) === '[object Object]'
}

/*
* @func
* @desc 判断一个数据类型是否为未定义
* @param {any} v
* @return {bool} 数据类型是否为未定义
* */
export function isUndef(v:any): boolean {
  return v === undefined || v === null
}

/*
* @func
* @desc 判断一个数据是否为空，含未定义、空数组、空字符串、NaN
* @param {any} v
* @return {bool} 数据是否为空
* */
export function isEmpty(v:any): boolean {
  return isUndef(v) || v === [] || v === '' || v !== v
}
