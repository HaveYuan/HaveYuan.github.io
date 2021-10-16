(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{528:function(t,a,s){"use strict";s.r(a);var e=s(4),v=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),s("p",[t._v("每年圣诞节很多人都会把自己的微信头像加上一个圣诞帽，这个实现起来并不难，动手试试吧")])]),t._v(" "),s("p",[t._v("看着大伙都在弄这个，我自己也来试一哈，我分别用了两种方式来实现，一种是普通的方式，一种是wxs方式")]),t._v(" "),s("h2",{attrs:{id:"普通方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通方式"}},[t._v("#")]),t._v(" 普通方式")]),t._v(" "),s("p",[t._v("效果图如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/chrismas/1.webp",alt:"image"}})]),t._v(" "),s("h3",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("ul",[s("li",[t._v("获取头像")]),t._v(" "),s("li",[t._v("选择素材")]),t._v(" "),s("li",[t._v("缩放，移动，旋转素材")]),t._v(" "),s("li",[t._v("生成canvas")]),t._v(" "),s("li",[t._v("生成图片，保存图片")])]),t._v(" "),s("h3",{attrs:{id:"实现方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现方式"}},[t._v("#")]),t._v(" 实现方式")]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/chrismas/2.webp",alt:"image"}})]),t._v(" "),s("p",[t._v("首先是获取头像，这个不用说，大家应该都会的。")]),t._v(" "),s("p",[t._v("选择素材这里我准备了三张圣诞帽的素材，这个网上有很多，可以自己找下，然后我还做了一个选择手机相册的功能，如果你自己有素材的话也可以直接选择这个功能。")]),t._v(" "),s("p",[t._v("缩放，移动，旋转素材都是通过触摸函数去实现的，这里是先将布局做好，然后在标签上面绑定各个触摸事件，通过返回的值在标签的style里设置实现各个效果。")]),t._v(" "),s("p",[t._v("调整好了之后点击保存头像会获取所有参数并将头像画出来，再通过 "),s("code",[t._v("wx.canvasToTempFilePath()")]),t._v(" 将canvas生成图片最后通过 "),s("code",[t._v("wx.saveImageToPhotosAlbum()")]),t._v(" 保存图片。")]),t._v(" "),s("h3",{attrs:{id:"主要代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要代码"}},[t._v("#")]),t._v(" 主要代码")]),t._v(" "),s("p",[t._v("主要的函数就是下面这几个，代码片段我会放在文末，没有什么比较难的地方，就是要注意下计算的时候不要算错就行。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/chrismas/3.webp",alt:"images"}})]),t._v(" "),s("h3",{attrs:{id:"需要注意的点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#需要注意的点"}},[t._v("#")]),t._v(" 需要注意的点")]),t._v(" "),s("p",[t._v("由于素材的大小可能会有不同，所以在重新选择素材的时候高度要重新设置一下，这里我用了一个方法来重置高度，主要是每次重新选择素材的时候就用 "),s("code",[t._v("wx.getImageInfo()")]),t._v(" 这个api去获取图片素材的宽高，再计算出宽高比。")]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/chrismas/4.webp",alt:"images"}})]),t._v(" "),s("h2",{attrs:{id:"wxs实现方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wxs实现方式"}},[t._v("#")]),t._v(" wxs实现方式")]),t._v(" "),s("h3",{attrs:{id:"实现方式-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现方式-2"}},[t._v("#")]),t._v(" 实现方式")]),t._v(" "),s("p",[t._v("思路跟普通方式是一样的，不同的是这里将绑定事件通过 "),s("code",[t._v("wxs")]),t._v(" 去实现，直接设置标签的参数而不通过逻辑层去处理，在性能上会比较好一点，不过这种实现方式在进行旋转的时候最后生成的图片会有不准，后面会说到。")]),t._v(" "),s("p",[t._v("参数的获取是通过在标签上设置style，然后点击保存的时候用  "),s("code",[t._v("wx.createSelectorQuery()")]),t._v(" 获取各个参数的")]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/chrismas/5.webp",alt:"images"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/chrismas/6.webp",alt:"images"}})]),t._v(" "),s("h3",{attrs:{id:"获取旋转的值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取旋转的值"}},[t._v("#")]),t._v(" 获取旋转的值")]),t._v(" "),s("p",[t._v("由于 "),s("code",[t._v("wx.createSelectorQuery()")]),t._v(" 并不能获取到 "),s("code",[t._v("rotate")]),t._v(" 这个参数，所以我是通过下面这种方式来拿到旋转的值的，将旋转值以宽度的形式赋值给 "),s("code",[t._v(".vo-ro")])]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/chrismas/7.webp",alt:"images"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"/blog/chrismas/8.webp",alt:"images"}})]),t._v(" "),s("p",[t._v("但是我发现旋转之后生成的图片不是正确的，原因是旋转之后通过 "),s("code",[t._v("wx.createSelectorQuery()")]),t._v(" 拿到的宽高并不是图片大小的宽高，而是旋转之后的宽高，按理来说不应该是这样的，即使通过样式旋转，它的宽高应该保持不变才对，这样就造成了参数上的错误，所以画出来的图片是不准确的。")]),t._v(" "),s("p",[t._v("因为加了旋转之后画出来的图片会不准确，暂时想不出别的方法，我把旋转的按钮先注释掉了，只支持缩放跟拖拽。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("两种方式，wxs性能要更好，但是效果没第一种的好，看你要哪种了，最后祝大家圣诞节快乐，祝你生活愉快")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developers.weixin.qq.com/s/Cizd1RmY7qdg",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://developers.weixin.qq.com/s/Cizd1RmY7qdg"),s("OutboundLink")],1)]),t._v(" "),s("cheers"),t._v(" "),s("pay")],1)}),[],!1,null,null,null);a.default=v.exports}}]);