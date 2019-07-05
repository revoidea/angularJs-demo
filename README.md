# angularJs-demo

1.什么是文档对象模型？？？
2.什么是文档对象模型的记忆体空间？？？？

----------------------------------------------
- 1-1.目标：了解工具的功能 和 了解工具运行的机制
  同时：了解一些javascript的知识，有助于了解angular
  的运行机制


- 1-2.angularJs的专有名词：只是名词，学会并理解它的概念

------------------------------------------------------
- 2-1.AngularJs 想要解决的问题
- a.解决手动编写代码操作DOM[文档对象模型]（如jquery的代码实现）
注意：操作DOM的方式包括（获取/修改html元素的值或者属性，
改变html元素的状态（显示或者隐藏）等等）

原因：
1.因为代码执行了很多管理工作，代码会变得难以维护
2.

解决方案：angularJs针对以下所进行的一些操作：

思想：
1.自动的更新HTML和JavaScript变量
2.自动更新JavaScript变量，然后自动更新HTML

源头：
处理复杂的文档对象模型的管理（控制）
以及管理HTML和网页应用逻辑
管理javaScript 变量和资源


Jquery的实现方式是手动编写代码进行控制（管理）

AngularJs 想要解决第一个问题，便是以上的，即自动的
进行这些管理，而不需要手动编写代码

所以要了解angularjs如何解决这些问题，以及是使用了
哪些概念来解析这些问题

------------------------------------------
- 2-2:Model,View,Whatever....(MVW)
model:
view:
whatever:

1.实现[思想]的方式：
概念:
1.mvc(model-view-controller)
2.mvvm(model-view-viewmodel:为特定的view所建立的model) -比较新的
3.mv*（w）-angularJs
model:资源(如以javascript举例，假设资源包含了一个变量)
view:使用者看到的界面（代表的是html）--比如h1就是html的元素
whatever（w[*]）：model与view之间的连接（连结），导致的
结果是：
1.model发生的变化会自动影响view,而view发生的变化也会
自动影响model。以上结果都不需要手动写代码实现

whatever：可能是controller,也可能是viewmodel,而angularjs
并没有限制中间连接的名称（也可以用一些不同的方法来实现）
--------------------------------------------------
整个架构：一个model,一个view 以及 两者之间的连接，所以为
MV*

angularjs提供了一些将javascript对象及变量与
view（html或者文挡对象模型，
浏览器程序的记忆体空间所存储的用来表示HTML的资源）建立连结

代码中的对象和变量会和浏览器用来呈现页面的资源有连结

---以上为angularjs架构的概念，也是angularjs的功能

接下来会看到一些例子：
--------------------------------------------
- 2-3 html的自定义属性
浏览器读取html文件的过程：
用浏览器打开html页面（文档）--》浏览器会读取html内容(资料)
--》存放至记忆体中，建立文档对象模型（DOM）-->
浏览器根据文档对象模型在屏幕上绘图产生界面；


- 1.html的自定义属性：这些属性并非html的标准之一，
开发者不会让浏览器参考这个属性，所以网页看起来
没有发生变化，然而这些属性仍存在浏览器程序（程式）的记忆体
中，仍存在于文档对象模型中，所以可以通过$.attr()方法来取得这个
属性，并且可以打印到控制台。

- 2.现HTML5提供一个标准：data- 前缀属性，可以加在任何自定义属性前
（如：data-reply=""）

- 3.angularJS 也提供了一些类似的自定义属性
（如ng-....）

angularjs利用浏览器的文档对象模型的记忆体空间来存储
ng- 属性，并根据这些自定义属性的值来做判断。
（若要这些自定义属性符合html5标准，可以使用data-ng- 作为
属性前缀）

重点:懂得声明并存取Html自定义属性（一直在用的方式）

----------------------------------------------------
- 2-3 javaScript的全局命名空间（Global Namespace）
声明全局变量或者命名空间，在后续引入其他文件的时候，
可能造成同名（污染），导致变量或者对象的值被覆盖。

避免声明的变量可能被污染，解决办法是，创建一个空的
对象，之后声明的变量或者方法，放在这个对象中，通过
对象名来进行访问，通过这样的封装，可以保证全局命名
空间不会被污染。

理解这个概念，可以让我们创建可扩充可重复使用的复杂程序(软件)

angularJS的基础架构也是使用的模式，
在遇到一些特别的组件（元件）或者一些架构要素，其中的一个
目的就是不要污染全局命名空间，可以确保自身创建的变量
与函数不会与其他地方声明的变量和函数产生冲突和覆盖。

重点：理解这个概念
-------------------------------------------------------
- angularjs文件下载地址：angularjs.org

- 2-6 module(s)(模块)，app（s） 和controller(s)
- 1.angularJs应用程序的架构：包括模块（modules）,
应用程式(apps)与控制器(controllers)

通过angular.module（） 在全局命名空间建立了一个对象，
是唯一的对象，同时也是一个angularjs模块
-----------------------------------------------------
在html里面定义以下属性
ng-app (module与view建立连接)
ng-controller （view与 controller 建立连接）

在js里面声明:
var app=angular.module（'ng-app的属性值',[]）
app.controller('ng-controllerd的属性值',function(){

});


以上为一个angularjs的基本架构

------------------------------------------------------
- 3-1  JavaScript 的dependency injection（依赖注入） --重要
依赖注入：就是将一个对象传递给一个函数。
与其在函数内部建立一个对象，不如将它从外部传递给函数。（这样做的好处是？？？？？）
1.函数和对象没有相依性，不管用何种方式创建对象，都不会
使函数发生变化，只要能够把对象传递给函数就行。
2.函数和参数(argument??) 没有相依关系，用任何方式创建的
对象都可以传递给函数，以上就是一种相依性注入
3.易于维护代码
4.依赖注入可以为网页应用提供稳定的架构；

在JavaScript中一切都是函数，对象也是函数。

------------------------------------------------------
- 3-2 angularJS 的 scope service (重要)
scope（作用域）：它能够让model 与view连结(接)，是个对象。来自
于angularJs提供的scope service,也和依赖注入有关联。

带有$符号开头的对象，都是一种angularJS service（如￥scope）

对于$scope可以携带出其他资料，也可以添加变量,函数到$scope上

$scope 成为view与controller的中介，能够在view和controller
之间交换信息；

原因在于：依赖注入将对象传递给了controller

------------------------------------------------------
需要了解angularJs如何提供像$scope这样的功能？？？
- 3-3 JavaScript 的 函数（Functions）与字符串(Strings)

javaScript 允许把一个函数打印出来，JavaScript会将函数
转换为字符串。

然后， 可以将这个字符串拆解，并且可以得到这个函数
的参数名称，然后参数名称可以用来做一些判断。这便是
angularjs使用的技巧。
 
- 3-4 angularjs 如何实现 ‘依赖注入’

了解其内部运行机制

angular.injector().annotate(function);

此方法可以把function的参数转行成字符串，然后分别存在
数组中。


[$scope](服务)在方法的参数的任意位置，angularJS都可以
识别处理，并准确传递到函数中（依赖注入）。关键的是service的参数名称
写对，否则angularJS识别不出来。

$scope service 是一个非常重要的service，能够将变量或者
函数与view做连结。

- 3-5 取得其他得service

注意：angularJS会检查和读取参数列表，然后将对象传递
至对于的参数位置，会辨认参数，并且传递正确的内容。以上
是基于（依赖注入）实现的


- 了解其他service的方式：
- 1.看源码(在官网里面找angularJS没被压缩的js文件)
- 2.看api参考文档

- https://angularjs.org/
- https://angularjs.io/

*【重要】

(*)$http:用来获取资料
$log:输出，打印日志
$filter:可以转换字母大小写，还有很多功能；（看文档）

多使用AngularJS service， 不重复写angularJS service
已经提供的功能（所以要看文档，了解有哪些angularJS以及其使用方法）

- angularjs service 分为内部service和外部service：
- 1.带$的参数名，为内部service
- 2.外部service 需要引用相应的JS文件，命名一般为
- ngXXX;
- 3.二者的使用方式也是不一样的

- 外部service：例如
ngMessage(表单验证),ngResource（文件下载）

可以通过搜索angularJS modules 查看现在最新的模块

- 3-6 数组与函数 （JavaScript） 
数组：在数组放入任意不同的数据类型，比如数字，字符串，函数等
函数也可作为数组的元素。

- 3-7  Dependency inject & Minif.（angularJS）

- angularJS有两种实现（Dependency inject）的方法。

- minification:指压缩文件容量，让下载更加迅速。
Minif不会压缩字符串的内容。

- 第二种 依赖注入的实现方式：
通过把参数和函数放在数组的方式

- 注意：这种方式并不会在乎参数在函数定义的名称，而是根据
数组元素来决定传递的对象与位置。例如根据"a","b"来传递
对象与位置。
【"a","b",function(a1,b1){

}】：利用数组元素传递参数建立正确顺序的。结尾括号的顺序
是大括号-中括号-小括号。
所以这种方式，参数的顺序是会影响结果的。所以参数的
对应顺序很重要。

- 利用数组的概念帮助代码的压缩。

- 4-1 scope 与interpolation(插值)

- (angularJS*)interpolation:译为插值，意思是即由组合字符串
和占位符建立一个字符串，所以interpolation就是即由字符串
和变量产生的一个新的字符串。

angularJS 如何实现 interpolation？？？
用{{ }} 达成interpolation


- 4-2 Directive（指令） 与双向数据绑定

- (angularJS*)Directive（指令）：指angularJS操纵部分
的文档对象模型（类似jQuery操作【修改/删除】DOM）

注意：多使用指令，因为功能强大，具备弹性且容易使用；

- 双向数据绑定：
model view  两者间的连结

- 4-3  事件循环机制（Event Loop）  ---JavaScript 概念

- 了解model 与 view 之间的连结是什么东西？？？
watchers 和 Digest Loop :watchers 在digest loop
中检查监看列表，angularJS会监听事件并检查变量，每当有
变动发生或是有潜在更改的事件发生，angularJS会检查
变量，然后自动更新界面和其他相关的变量。

- Event Loop是在随时监听各种事件触发的。例如使用JavaScript
或者jQuery里面addEventListener()，监听器

- Event Loop:是一个持续监听网页事件的循环。
若添加事件监听器或者监听某个特定的事件（比如点击键盘，
点击鼠标，移动鼠标，或者页面里的改变等等）

- Event Loop的运行机制？？

- 4-4 监看器（watchers）与Digest Loop --angularJS

- 目的：要自动的控制model与view，实现它们两者之间的连接，扩展了
event Loop,提供了更多的功能。

- 了解watchers 是什么，能做什么？？

- 了解Digest Loop是什么，能做什么？？

- 两者结合起来，又能做什么？是如何相互配合的？

- angularjs添加了angular context ,建构于event loop
之上，在angular context里面的操作都符合angularjs架构


- angularjs有一个巨大的监看列表，watchers 

而监看和检查数值变化的工作，是在所谓的digest loop内执行的

（digest loop 于event loop 类似，但这是angularjs 开发的）

- digest loop :
- 1.进入一个digest loop，执行一个digest cycle

- 2.angularjs 会确认有没有任何数值改变

- 3.它会检查每一个监看列表的变量，检查每一个监看
的数值有没有变化，然后会比对新数值和旧数值，
如果数值发生改变，它就会更新所有与这个资料有连结
的其他资料（更新范围包括：文件对象模型的任何内容，
包括interpolation或者是任何连结）

- 4.再执行一次digest cycle，看看有没有其他的数值
因为先前的变动而被改变

- 5.直到新数值与旧数值一样，angularjs就会停止
检查，直到下次event loop,又再次监测到事件触发

------------------------------------------
- angularjs 监听界面事件，然后建立一个巨大的监看列
表，当事件发生时，它开始逐一检查所有变量的值有没有
被改变，如果变量被改变了，angularjs 会更新文件对象模型，
反之亦然。

----------------------------------------------
- 注：
- 1.我们可以针对特定的变量添加自定义的监看功能
（使用 XXX.$watch("xxx",function(){
})）
- 这么做的原因，是想借此得到一些信息，可以知道网页的状态，平时
并不会这么做


- 借由监看列表，和借由digest cycle 和digest loop
,借由事件监听器，借由监看变量等功能，angularjs
替你管理了所有的事情，而不再需要自己动手写代码去
做这些事情

- 有一个需要警惕的点：
angularjs监看了所有在angularjs context
之内的变量，这些变量都在angular架构之内，
这是angularjs的限制，但是利大于弊
因为.....

比如用把这些变量放在angularjs context之外，
看看会发生什么事情？

例子：用setTimeout定时器来定时改变变量的值

可以看到，变量值被更新了，但是文档对象模型并没有更新。
这是因为setTimeout的行为就像是在JavaScript环境中
，而且是一个非同步的函数。。。。。


如何解决这个问题：
方法一：手动设置
使用$scope.$apply()，使angularjs知道将这些操作当作一般
的angularjs流程


什么时候会使用到$apply()呢？

实际上angularjs在大部分的情况都帮你把代码包装在
$apply之中，但有的时候，比如你使用了setTimeout（），
或者使用外部的函数库（像jquery）可能会导致一些问题的
时候，就必须把代码包装在$apply之中。

但是angularjs也提供了一些service，例如$timeout
service 的内部运作基本就是这样子

如果使用了$timeout（），就不需要把代码放在$apply里面
，这是angularjs service，它是angularjs架构的一部分，
angularjs会把这些事情做了


结论：可以从angularjs提供的功能得到了很多益处，
但是伴随的限制就是，必须接受所有angular设定的架构，
但这是利大于弊的事，因为这样可以专注于建造良好且功能完善
的使用界面，而不是编写复杂的代码，因为写代码只是为了要实现
功能。


- 4-5/6 常见的Directives (指令)
指令的作用：用来指令app controller model的，angularjs还有很多
其他的指令可以用来操作文档对象模型(DOM)，显示或者隐藏网页元素
或是修改网页运行的逻辑。

- 常见的angularjs内建的指令：
- 1.ng-if:属性值是一个JavaScript表达式（表达式可以是变量的比较或者回调函数），
返回值式true或者false.
(!== 是比较安全的方式，所以了解下!== 和!=的区别)
（html元素会从DOM中移除）

- 2.ng-show(显示):实际上是html元素得到新的class属性值（display:none!important）,
并非是把html元素从DOM中移除，而是隐藏了元素
- 3.ng-hide（隐藏）

- 4.ng-class（为html元素添加样式）：设定值是一个JavaScript对象，
ng-class ="{key:value[是一个JavaScript表达式]}"


- 5.ng-repeat[循环遍历数组或者集合]
- 6.ng-click:点击事件
- 7.ng-keydown
- 8.ng-keypress
- 9.ng-changed
- 10.ng-cloak：当网络缓慢时，使用插值，会在界面加载的
时候，看到原始的样子，它的作用就是避免这种情况的发生：
隐藏这个元素，指定angularjs对它完成操作。可以确保用户
看到处理后的界面，而不会看到插值(interpolation)的原始格式.

- 重点：明白这些指令是如何运作的？？？

- 4-7：XMLHTTPRequest 对象(JavaScript方面)

- XMLHTTPRequest对象功能：调用API.这个对象是由
浏览器本身支持的。

- （了解XMLHTTPRequest的执行流程）

- 4-8 请求外部资源与$http
- 1.明白资源之间的连结？
- 2.如何在angularjs内部处理资源？
---------------之前探讨------------------
- $http service:如何使用$http向外部API请求资源/传送资源？？？

- $http会将XMLHTTPRequest能够提供的功能封装起来。





































 

 




























































































