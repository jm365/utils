/*========================================================================
* author: yxw
* email: 270279036@qq.com
* description: cookie操作
* created: 20191115
* lastModify: 20191115
* ========================================================================*/

/*
* @func
* @desc 获取cookie
* @return {object} 所有cookie对应的一个object
* */
export function getAllCookies() {
	var cookieStr = document.cookie;
	var cookieArr = cookieStr.split('; ')
	var singleCookieArr
	var cookieObj = {}
	var i
	for ( i = 0; i < cookieArr.length; i++) {
		singleCookieArr = cookieArr[i].split('=')
		cookieObj[singleCookieArr[0]] = singleCookieArr[1]
	}
	return cookieObj
}


/*
* @func
* @desc 获取cookie名称对应的值
* @params key [string] cookie名称对应的字符串
* @return {string} cookie名称对应值的字符串
* */
export function getCookie(key) {
	var cookieObj = getAllCookies()
	var result
	var defaultReturn = ''
	if (typeof key === 'string') {
		result = cookieObj[key] || defaultReturn
	} else {
		result = defaultReturn
	}
	return result
}
