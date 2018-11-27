# Redux
------

#### 1. React的State管理
* 在第一部分的[组件状态](./part1/State.md)小节中，我们知道React通过State来管理和更新数据。
* 通常推荐的做法是在组件的根结点的某个位置来存放应用的state，这样做的好处是将应用程序的数据管理在统一的位置，通过让数据在组件树中向上或向下传递来让子组件调用。
* 然而随着应用程序规模的不断扩大，这样的管理方式会增加程序的复杂性，此时将State独立出来与自身的层级隔离，是最佳实践。
* 简单而言就是不在应用内使用React的State/setState()方法。

#### 2. 在React之外管理State
* 在React之外管理State会减少大量类组件的使用，可以使用很多无状态组件让应用更加明确化和易于复用、测试。
* Facebook因此推出了一种设计模式：Flux ——》 旨在保持数据的单向流动。
* Flux架构：把State数据存放在Store中，Store保留和更改数据，从而更新视图

<img src="./images/p2_4.png" width="50%" height="auto">

* Redux: 一个基于类Flux的框架，它使用单个不可变对象表示应用程序的state，引入Reducer。

#### 3. Redux核心概念
* `Action`
* `Reducer`
* `Store`
* `Action生成器`
* `中间件`

#### 4. React-Redux

