/*========================================================================
* author: yxw
* email: 270279036@qq.com
* description: 运行环境判断
* created: 20191104
* lastModify: 20191104
* ========================================================================*/

/*
* @func
* @desc 判断是否为IOS系统
* @return {bool} 是否为IOS系统
* */
export function isIOS() {
  return navigator.userAgent.match(/iphone/gi)
}

/*
* @func
* @desc 判断是否为iPhone X系列手机，因为此系列手机底部有黑色横条，需要做兼容处理
* @return {bool} 是否为iPhone X系列手机
* */
export function isIphoneX() {
  var isIOS =  isIOS()
  if (isIOS) {
    // iPhone X、iPhone XS---812,375  iPhone XS Max、iPhone XR-----896，414
    if ((screen.height === 812 && screen.width === 375) || (screen.height === 896 && screen.width === 414)) {
      return true
    }
  }
  return false
}
