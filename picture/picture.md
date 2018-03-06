# 前端图片资源的优化
## 目前开发spa应用时发现图片类资源占用了不小的时间，所以本章探讨下有哪些优化图片资源方法；
 ## 小图
### 1.css sprites
    页面中通常有很多小的图片资源，将这些资源拼接在一张图片上再进行请求能够大大减小资源的请求次数，提高应用性能   
    通过css 对图片进行截取选择所需要图片片段
``` CSS   
   .sprit{  
     width: 15px;  // 设置图片大小
     height: 15px; // 设置图片大小
     background: url("sprit.png") no-repeat -15px 0px; // 截取图片
   }  
``` 
    但截取后图片为位图，过度放大后会引起图片的失真，鼠标经过需要显示状态，无法对图片进行扩展，显示不同状态

    
### 2. base64
    将小图转为base64编码，直接引入，这样就省去一个http请求，并且通过GZIP压缩后与图片大小相同
``` CSS
    .base64 {
        background-image: url(data:image/gif;base64,R0lGODlhBAABAIABAMLBwfLx8SH5BAEAAAEALAAAAAAEAAEAAAICRF4AOw==);
        }
```

### 3.icon font    
    图标字体则是把图标作为字体库引入，解决图片失真 和色彩问题  
``` CSS  
    .iconfont {
      font-family:"iconfont";
      font-size:16px;
      font-style:normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    .icon:before { 
      content: "\e66c"; 
      color:red;
    }
``` 
    许多网站都可以在线制作 图标字体    
     * [阿里巴巴矢量图标库](http://www.iconfont.cn/)
     * [fontawesome](http://fontawesome.dashgame.com/)
    但精灵图与图标字体间需要权衡,图标字体无法表现更多的颜色和更多的内容  
## 大图
### 1.Cut picture    
     较大且精的图片能到达4,5M 以上，请求网速较慢时就造成页面空缺，       
     对较大的图片进行切割，利用并发请求图片而后对图片进行拼接
    
### 2.Gradual  
    对图片进行渐进增强替换，首先加载一张分辨率较低的图而后替换为高清原图，这样就不会有页面空白期
    
### 3.WebP  
    采用webp格式图片(webp是谷歌推出的一种图片格式，虽然解码速度是png的四倍，但相同质量下比png格式小了40%)，
    各浏览器厂商支持程度不同 可以通过选择器筛选图片
``` html  
      <source src="*.ebP" >
      <source src="*.png" >   
```
### 4.lazyload 
     不一次性加载图片，当图片接近可视区域内加载图片，可提前固定img标签大小，阻止页面重绘    
### 5.NAN 
     不用大图  
   
## 不同方法间各有优势，灵活配合    