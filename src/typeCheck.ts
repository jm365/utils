/*
* author: yxw
* description: 数据类型判断
* create: 20190828
* lastModify: 20190828
* */

export function isArray(v:any): boolean {
  return toString.call(v) === '[object Array]'
}

export function isObject(v:any): boolean {
  return toString.call(v) === '[object Object]'
}

export function isUndef(v:any): boolean {
  return v === undefined || v === null
}

export function isEmpty(v:any): boolean {
  return isUndef(v) || v === [] || v === '' || v !== v
}
