chrome extensions

---

Chrome插件是一个用Web技术开发、用来增强浏览器功能的软件，它其实就是一个由HTML、CSS、JS、图片等资源(借助一点点的chrome API)组成的一个.crx后缀的压缩包. 也能配合C++ 实现更底层的功能.

插件可以说是个网页或者网站.

能够在使用webkit内核浏览器运行.



最基本组成

    	- manifest.json
    	- background script
    	- content script
    	- popup html



manifest.json go

		最重要也是必不可少的文件，用来配置所有和插件相关的配置，必须放在根目录。manifest_version、name、version这3个是必不可少

background script

		理解为插件运行在浏览器中的一个后台网站/脚本，注意它是与当前浏览页面无关的。权限非常高，几乎可以调用所有的Chrome扩展API（除了devtools）,无跨域限制,

content script

	向页面注入脚本, 能够改变页面的DOM 和 CSS

popup.html

	用户点击扩展程序图标时，都可以设置弹出一个popup页面



通讯

    - popup或者bg向content主动发送消息
    - content向background 发送消息



存储

	chrome.storage



调试方式

	content-script 打开Console,切换

	popup-js popup页面右键审查元素

	background.js 插件管理页点击背景页即可

	options 调试 右键



其他:

     - 国际化
     - mac 安装位置: ~/资源库/Application Support/Google/Chrome/Default/Extensions
     - 不支持内联JS(会报错), 使用JS绑定事件
     - 使用css 要谨慎
     - 发布: https://developer.chrome.com/webstore



实用推荐:

- AdBlock 超实用
- ReRes 拦截改变页面请求,超实用
- Charset 修改网站的默认编码
- Evernote Web Clipper 印象笔记
- FeHelper 前端助手
- JSON-handle
- Lighthouse  性能
- OneTab 管理书签,节约内存
- Postman



参考:

    - 官方: https://developer.chrome.com/extensions
    - 官方例子: https://developer.chrome.com/extensions/samples
    - https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html
    - https://juejin.im/post/5c135a275188257284143418
    - 360浏览器 http://open.chrome.360.cn/html/dev_doc.html
