# getCookie(),新增于v1.0.7

获取当前页面`cookie`对应的`Object`

## 入参

无

## return

(`Object`): `cookie`对应的`Object`;`cookie`为空时返回`{}`空`object`

## example

    document.cookie = 'name=jm365'
    const utils = require('jm365@utils')
    const cookiesObj = utils.getAllCookies()
    console.log(cookiesObj) // {name: 'jm365'}
