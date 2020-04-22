# JavaScript

### [unicode](https://www.fileformat.info/info/unicode/) 字符集

- [Blocks](https://www.fileformat.info/info/unicode/block/index.htm) 编码组
- 0 ~ U+007F：常用拉丁字符
    - `String.fromCharCode(num)`
  - U+4E00 ~ U+9FFF：CJK ChineseJapaneseKorean三合一
    - 有一些增补区域（extension）
  -  U+0000 - U+FFFF：[BMP]([https://zh.wikipedia.org/wiki/Unicode%E5%AD%97%E7%AC%A6%E5%B9%B3%E9%9D%A2%E6%98%A0%E5%B0%84](https://zh.wikipedia.org/wiki/Unicode字符平面映射)) 基本平面
  
- [Categories](https://www.fileformat.info/info/unicode/category/index.htm)

  - [space空格系列](https://www.fileformat.info/info/unicode/category/Zs/list.htm)

* inputElement
  * WhiteSpace: 
    - \v
    - \t
    - nbsp
    -  无分词效果空格(/u00A0)
    -  zwnbsp-零宽nbsp
  * LineTerminator
  * Comment
  * Token: 一切有效的东西
    * Punctuator: 符号, 用于构成代码结构
    * IdentifierName: 标识符
      * 变量名: 不可与关键字重合, 特例: `get`, `undefined` 全局不可改变量名
    * 属性名: 可与关键字重合
    * Literal: 直接量
      * NumericLiteral
      * StringLiteral
    * Template
  
* Type
  * Number: IEEE 754 Double Float
    * 浮点数比较: Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON
    * `97 .toString(2)`
  * String
    * USC: U+0000 ~ U+FFFF, unicode 的 BMP 范围
    * GB: 国标
    * 存储方式: UTF8/UTF16
      * UTF8 使用 8 位存储
      * UTF16 使用 18 位存储
    * 引号内的特殊字符 `\'"bfnrtv`
  * Boolean
  * Null
  * Undifined
  * Symbol
