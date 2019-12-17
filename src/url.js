import { isObject } from './typeCheck.js'

export function getUrlParams(key) {
  var result = {}
  var searchStr = location.search || location.href.split('?')[1] || '' // 为了兼容不规则处理url的情况
  searchStr = decodeURIComponent(searchStr.replace(/^\?/, ''))
  var searchParamsArr = searchStr.split('&')
  var keyNameArr
  if (searchStr) {
    searchParamsArr.forEach(function(item) {
      keyNameArr = item.split('=')
      result[keyNameArr[0]] = keyNameArr[1]
    })
  }
  if (key && typeof key === 'string') {
    result = result[key]
  }
  return result
}

/*
* @func
* @desc 将Object转为url中query参数格式string，value类型为非(string || number)的key将会被忽略
* @param {object} obj 包含参数的object
* @param {object} configs 配置参数集合
* @params {boolean} configs.isNeedEncode 参数是否要做encode处理
* @return {string} query参数格式string
* */
export function formatObjToUrlQueryStr(obj, configs) {
  var queryStr = ''
  if (isObject(obj)) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)
        && (typeof obj[key] === 'string' || typeof obj[key] === 'number')) {
        queryStr = !!queryStr ? (queryStr + '&') : queryStr
        queryStr += key + '=' + obj[key]
      }
    }
  }
  return queryStr
}
