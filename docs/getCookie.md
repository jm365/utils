# getCookie(key),新增于v1.0.7

获取当前页面对应cookie指定名称的值

## 入参

| 参数名 | 类型 | 是否毕传 | 示例 | 备注 |
| :---: | :---: | :---: | :---: | :---: |
| key | String | 否 | name | 当未传入key/类型错误/key对应的cookie不存在时会返回空字符串`''`|

## return

(String): key在cookie中对应的值；当未传入key/类型错误/key对应的cookie不存在时会返回空字符串`''`

## example

    document.cookie = 'name=jm365'
    const utils = require('jm365@utils')
    const nameInCookieStr = utils.getCookie('name')
    console.log(nameInCookieStr) // 'jm365'
