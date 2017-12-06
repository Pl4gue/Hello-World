# Hello-World

It is just a simple Node.js module for creating "_Hello World_" messages in different ways. This is my very first approach to **Node.js** and the **npm** package manager

=> Made as part of Google Code-In 2017 for [Sugar Labs](https://sugarlabs.org/).

### Install

`npm install gci2017_npmhelloworld@2.0.0`

### Usage
Import module using
```
var testmodule = require('gci2017_npmhelloworld')
```

Then, use either
``` testmodule.hwcmd() ``` for 'Hello World' console output

``` testmodule.hwhttp('127.0.0.1',1337) ``` for 'Hello World' on a normal http hosted page at `127.0.0.1:1337`

``` testmodule.hwexpress('127.0.0.1',1337) ``` for 'Hello World' on a express hosted page at `127.0.0.1:1337`