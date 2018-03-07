# 前端样式的优化

## 目前开发 spa 应用时发现样式类资源存在冗余，重复，不便于维护的问题，所以本章探讨下有哪些优化样式资源方法；

## 结构

![foryou](https://github.com/jx-boom/optimization/blob/master/css/img/path.png)

结构中最上级放置全局变量，例如主题色，模态框大小，字号等  
 第二层为页面中组件样式，在样式中引入全局变量第三层为页面样式 根据页面组件引入样式

```
  └─assets
    └─sass
      └─全局变量.scss  // 第一层
      └─浏览器兼容统一.scss
      └─ 共用方法.scss
  └─components
      └─sass
        └─组件A.scss  // 第二层
        └─组件B.scss  // 第二层
      └─ 页面A.vue
```

```
 页面A .vue
```

![foryou](https://github.com/jx-boom/optimization/blob/master/css/img/cssLoader.png)

因为模块化划分后可能会出现类名重复问题，将类名 转化为路径 加文件名 加类名 加 hash

```
 <style lang="sass">
 @import 组件A
 @import 组件B
 </style>
```

优点 组件分离便于维护，全局变量统一配置，减少单文件代码量,灵活修改

## 注释

    ![foryou](https://github.com/jx-boom/optimization/blob/master/css/img/Notes.png)  

    最好的注释是没有注释
    在将样式模块化划分后不必给模块注释,只在关键语句要加注释便于团队协作;

## css 书写

### 书写顺序

    css属性书写顺序, 建议遵循 布局定位属性-->自身属性-->文本属性-->其他属性.
    定位属性： 引起元素位置发生变化的属性 等 （position padding margin display）
    自身属性： 自身的宽高，边框 等 (width, height ,flex border backgrounf)
    文本属性： 字体的大小，粗细, 颜色 等 (font-size font-weight text-align )
    其他属性： 层级，动画 等(z-index , opacity,animation)

### 层级

    虽然使用预处理器后，方便叠加但层级不要过深,   最多三层  ,减少不必要的查找

### 定位

对于频繁移动的元素使用 translate 代替 left， left 移动会引起页面的重绘 ，而 translate 则是在合成层进行，能够提升性能

### 继承

合理使用继承，对于可继承属性，在父元素设置后，子元素及可继承父元素属性 (font-size ,color,text-align)

### 组件

将常用布局抽象为组件（ OOCSS ），需要时引入，利用类名叠加的方法布局
