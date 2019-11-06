# getElOffsetTop(el),新增于v1.0.3

获取某个Element离文档顶部内边距的距离

## 入参

| 参数名 | 类型 | 是否毕传 | 示例 | 备注 |
| :---: | :---: | :---: | :---: | :---: |
| el | Element | 是 | document.body |  |

## return

(Number): Element离文档顶部内边距的距离，单位px

## example
    // <body><div class="test"></div></body>
    const utils = require('jm365@utils')
    console.log(getElOffsetTop(document.getElementByClassName('test')[0])) // 100,根据样式不同有不同的值
