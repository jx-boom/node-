# 前端样式的优化
## 目前开发spa应用时发现样式类资源存在冗余，重复，不便于维护的问题，所以本章探讨下有哪些优化样式资源方法；
 ## 结构   
 ![][https://github.com/jx-boom/optimization/blob/master/css/img/path.png]
   结构中最上级放置全局变量，例如主题色，模态框大小，字号等   
   第二层为页面中组件样式，在样式中引入全局变量
   第三层为页面样式 根据页面组件引入样式
 ~~~  
   └─assets 
     └─sass 
       └─全局变量.scss  // 第一层
       └─浏览器兼容统一.scss 
   └─components
       └─sass 
         └─组件A.scss  // 第二层
         └─组件B.scss  // 第二层
       └─ 页面A.vue
         
   └─       
~~~   

~~~ 
 页面A .vue   
  <style lang="sass">
  @import 组件A
  @import 组件B
  </style>
~~~
   优点 组件分离便于维护，全局变量统一配置，减少单文件代码量
 