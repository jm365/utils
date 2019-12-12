# @jm365/utils [documentation](https://github.com/jm365/utils/blob/master/docs/index.md)

与项目业务无耦合关系的公共方法库

## Installation
### In browser
    <script src="https://cdn.jsdelivr.net/npm/@jm365/utils@1.0.8/utils.min.js"></script>
[![](https://data.jsdelivr.com/v1/package/npm/@jm365/utils/badge)](https://www.jsdelivr.com/package/npm/@jm365/utils)

### With npm
    npm i @jm365/utils

## Usage
### In browser
    const now = utils.dateFormat(Date.now(), yyyy/MM/dd hh:mm:ss)
    console.log(now) // 2019/08/08 12:01:01
### With npm
    const utils = require('@jm365/utils')
    const now = utils.dateFormat(Date.now(), yyyy/MM/dd hh:mm:ss)
    console.log(now) // 2019/08/08 12:01:01
