# service与依赖注入

## dependency injection[依赖注入]（重要名词） --JavaScript的知识点

- 含义:将一个对象传递给一个函数。
- 与其在函数内部建立一个对象，不如将它从外部传递给函数，这样做的好处如下：
1.函数与对象没有相依性，不管用何种方式创建对象，都不会使函数发生变化，只要能够把对象传递给函数就行；
2.函数与参数[argument]没有相依关系，用任何方式创建的对象都可以传递给函数，以上就是一种相依性注入；
3.易于维护代码；
4.依赖注入可以为网页应用提供稳定的架构；
- 在JavaScript中一切都是函数，对象也是函数；

## angularJS的scope service(重要)
- scope（作用域）：它能够让model与view 连接，是个对象。来自于angularJS提供的scope service，也
和依赖注入有关联。

- 注意：
1.带有$符号开头的对象，都是一种 angularJS service（如$scope）；
2.对于$scope可以携带其他资料，也可以添加变量，函数到$scope上；

## JavaScript的函数(functions) 与字符串(strings)

- 在JavaScript中，JavaScript允许把一个函数打印出来，也就是JavaScript会将函数转换为字符串。
- 将函数转换成字符串，然后可以将这个字符串拆解，并且可以得到这个函数的参数名称，然后参数名称可以
用来做一些判断。这便是angularjs使用的技巧。

## angularjs 是如何实现‘依赖注入’的

```
angular.injector().annotate(function);
```
- 此方法可以把function的参数转行成字符串，然后分别存在
数组中。

- [$scope](服务)在方法的参数的任意位置，angularJS都可以
识别处理，并准确传递到函数中（依赖注入）。关键的是service的参数名称
写对，否则angularJS识别不出来。
- $scope service 是一个非常重要的service，能够将变量或者
函数与view做连结

## 取得其他的service
- 注意：angularJS会检查和读取参数列表，然后将对象传递
至对于的参数位置，会辨认参数，并且传递正确的内容。以上
是基于（依赖注入）实现的
- 了解其他service的方式：
1.看源码(在官网里面找angularJS没被压缩的js文件)
2.看api参考文档
1.https://angularjs.org/
2.https://angularjs.io/



## 数组与函数

## Dependency inject & Minif.（angularJS）
