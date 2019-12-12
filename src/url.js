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
