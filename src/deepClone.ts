import { isObject, isArray } from "./typeCheck";


/*
* @func
* @desc 深拷贝一个对象
* @params {object || array} obj
* @return {object || array} 深拷贝之后的对象
* */
export function deepClone(obj) {
  let result
  const isArrayType = isArray(obj)
  if (isArrayType) {
    result = []
  } else {
    result = {}
  }
  if (isObject(obj) || isArrayType) {
    let childData
    for (let key in obj) {

      // 只拷贝对象本身的属性
      if (obj.hasOwnProperty(key)) {
        childData = obj[key]
        if (isArray(childData) || isObject(childData)) {
          result[key] = deepClone(childData)
        } else {
          result[key] = childData
        }
      }
    }
  }
  return result
}
