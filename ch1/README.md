
# model 与view搭配各种元件

## AngularJS 想要解决的问题
- 问题： 解决手动编写代码操作DOM（文档对象模型），比如使用jQuery实现，实现的方式是手动编写代码进行控制（管理）。
- 注：操作DOM的方式包括：获取/修改html元素的值或者属性，改变html元素的状态（显示或者隐藏）等等。
- 原因：1.手动编写代码，使得代码执行了很多管理工作，代码会变得难以维护；2.频繁操作DOM，也影响性能。
- 解决的思想:1.自动的更新HTML和JavaScript变量；2.自动更新JavaScript变量，然后自动更新HTML。
- angularJS主要想做的：处理复杂的文档对象模型的管理（控制）以及管理HTML和网页应用逻辑，管理JavaScript的变量和资源。angularJS想要解决第一个问题，便是以上的，即自动的进行这些管理，而不想要手动编写代码。

## Model,View,Whatever.....(MVM)

## 目前实现（思想）的方式：
- 概念：
-  mvc(model-view-controller)
-  mvvm(model-view-viewmodel:为特定的view所建立的model) ，当前比较新颖的一种实现方式。
-  mv*(w):angularJS使用的一种实现方式,相关概念如下：
-  model:资源（如以JavaScript举例，假设资源包含了一个变量）
-  view:视图，使用者看到的界面（代码的是html，比如h1就是html的元素）
-  whatever(*)：model与view之间的连结（连接），可以是任意的（可能是controller,也可能是viewmodel,angularJS并没有限制中间连接的名称，也可以用一些不同的方法来实现。）
-  整个架构的形式：一个Model，一个view，以及两者之间的连结，所以为MV*，这是angularJS的架构，也是angularJS的功能。其结果是model发生的变化会自动影响view，而view发生的变化也会自动影响Model。以上结果都不需要手动写代码实现。

- angularJS提供了一些将JavaScript对象及变量与view（html或者文档对象模型，浏览器程序的记忆体空间所存储的用来表示HTML的资料）建立连结。

## html的自定义属性

- 浏览器读取html文件的过程：用浏览器打开html页面(文档)--->浏览器会读取html内容(资料) --->存放至记忆体中，建立
文档对象模型(DOM) --->浏览器根据文档对象模型在屏幕上绘图产生界面。

- html的自定义属性：这些属性并非html的标准之一，浏览器并不会参考这个属性，所以网页看起来没有发生变化，但是这些属性仍存在浏览器程序的记忆体中，仍存在于文档对象模型中，所以可以通过$.attr()方法来取得这个属性，并且可以输出到控制台。

- 现HTML5提供一个标准:data- 前缀属性，可以加在任何自定义属性前(如：data-replay="")
- angularJS也提供了一些类似的自定义属性(如ng-....)，angularJS是利用浏览器的文档对象模型的记忆体空间来存储ng- 属性，并根据这些自定义属性的值来做判断。（若要这些自定义属性符合html5标准，可以使用data-ng- 作为属性前缀）
- 注：html的标准

## javaScript的全局命名空间（Global Namespace）
- 全局命名：在JavaScript中声明全局变量或者命名空间，在后续引入其他文件的时候，可能会造成同名(污染)，导致变量或者对象的值被覆盖。

- 避免声明的变量可能被污染，解决办法是：创建一个空的的对象，之后声明的变量或者方法，放在这个对象中，通过对象名来调用，通过这样的封装，可以保证全局命名空间不会被污染。这可以让我们创建可扩充可重复的复杂程序。

-  angularJS的基础架构也是使用这种模式，在遇到一些特别的组件(元件)或者一些架构要素，其中的一个目的就是不要污染全局命名空间，可以确保自身创建的变量于函数不会与其他地方声明的变量和函数产生冲突和覆盖。

## module(模块)、app和controller
- angularJS应用程序的架构：包括模块(module)、应用程序(app)与控制器(controller)
- angularJS通过angular.module()在全局命名空间建立了一个对象，是唯一的对象，同时也是一个angularJS模块。

- 例如:
- 在html的元素里面定义以下属性:
- ng-app(module与view建立连接)
- ng-controller(view与controller建立连接)
- 在js里面声明；
var app = angular.module('ng-app的属性值',[])
app.controller('ng-controller的属性值',function(){

});
- 以上为angularJS的基本架构。

-----------------------------------------------------------------------------
- angularjs文件下载地址：angularjs.org

###
- 重点是明白angularJS架构的具体用法和意义

##### 知识点连接
- h5的自定义属性 ~~~~angularjs的自定义属性
- JavaScript的全局命名空间~~~~~~声明angular对象的方式

