import { isObject } from './typeCheck.js'

export function getUrlParams(key) {
  var result = {}
  var searchStr = location.search || location.href.split('?')[1] || '' // 为了兼容不规则处理url的情况
  searchStr = decodeURIComponent(searchStr.replace(/^\?/, ''))
  var searchParamsArr = searchStr.split('&')
  var keyNameArr
  var reg
  var separatorIndex
  if (searchStr) {
    searchParamsArr.forEach(function(item) {
      keyNameArr = item.split('=')
      separatorIndex = item.indexOf('=')
      if (separatorIndex > -1) {
        result[item.slice(0, separatorIndex)] = item.slice(separatorIndex + 1)
      } else {
        result[item] = ''
      }
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
  configs = configs || {}
  var isNeedEncode = !!configs.isNeedEncode
  var value
  if (isObject(obj)) {
    for (var key in obj) {
      value = obj[key]
      if (obj.hasOwnProperty(key)
        && (typeof value === 'string' || typeof value === 'number')) {
        if (isNeedEncode) {
          value = encodeURIComponent(value)
        }
        queryStr = !!queryStr ? (queryStr + '&') : queryStr
        queryStr += key + '=' + value
      }
    }
  }
  return queryStr
}
