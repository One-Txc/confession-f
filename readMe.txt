


angular 引用其他js/css方法
方法一
  1.
  在.angular-cli.json文件中
  apps.scripts中添加需要引用的js
  apps.styles中添加需要引用的css
方法二
  2.过npm方式



layUi的使用
1. 在 src/assets/lib/ 下面放入layui的相关文件
2. 在.angular-cli.json文件中
   apps.scripts中添加需要引用的js
   apps.styles中添加需要引用的css
    "apps": [
       {
         ...
         "styles": [
           "styles.css",
           "assets/lib/layui/css/layui.css",
           "assets/lib/bootstrap/css/bootstrap.min.css"
         ],
         "scripts": [
           "assets/lib/jquery-3.3.1.min.js",
           "assets/lib/layui/layui.js",
           "assets/lib/bootstrap/js/bootstrap.min.js"
         ],
         ...
       }
3. 配置layui 在app.component.ts中 不配置会默认为src目录下
 ngOnInit(): void {
    layui.config({
      dir: 'assets/lib/layui/' //layui.js 所在路径（注意，如果是script单独引入layui.js，无需设定该参数。），一般情况下可以无视
      ,version: false //一般用于更新模块缓存，默认不开启。设为true即让浏览器不缓存。也可以设为一个固定的值，如：201610
      ,debug: false //用于开启调试模式，默认false，如果设为true，则JS模块的节点会保留在页面
      ,base: '' //设定扩展的Layui模块的所在目录，一般用于外部模块扩展
    });
  }


jq的使用
方法一：和layui类似方式引用独立的js
1. 在 src/assets/lib/ 下面放入js的相关文件
2. 在.angular-cli.json文件中
   apps.scripts中添加需要引用的js
    "apps": [
       {
         ...
         "scripts": [
           "assets/lib/jquery-3.3.1.min.js",
           "assets/lib/layui/layui.js",
           "assets/lib/bootstrap/js/bootstrap.min.js"
         ],
         ...
       }
3. 在需要的页面申明 $
  declare var $: any;
  或者全局申明(在typings.d.ts中) $
  declare var $: any;

方法二：npm安装方式
1. 在package.json中加入依赖
 "@types/jquery": "^3.3.22",
    "jquery": "^3.3.1",

2、在组件中引入jquery即可使用：
  import * as $ from 'jquery';
  这样会有一个问题：Bootstrap's JavaScript requires jQuery
  如果使用bootstrap.js。它依赖jquery.js。所以bootstrap的引用也要用npm方式比较好
  否则你要包装jquery.js先加载





















