/*
* @func
* @desc 获取某个Element离文档顶部内边距的距离
* @params el [Element] 对应的Element
* @return [Number] Element离文档顶部内边距的距离
* */
export function getElOffsetTop(el) {
  var result = el.offsetTop
  while (el.offsetParent) {
    el = el.offsetParent
    result += el.offsetTop
  }
  return result
}
