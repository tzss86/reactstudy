# GraphQL
------
很多年前一个前辈让我用过odata，graphQL和前者的作用是一样的，解决“前端做还是后端做”的问题。

>A query language for your API

* GraphQL官方解释是：一种API的查询语言。它提供对API中数据的完整和可理解描述，赋予客户端更多能力去获取想要的数据和去掉那些不想要的数据。
* GraphQL使用由服务器解析的查询字符串让服务器以这些查询指定的格式返回数据，查询用类似JSON的格式编写。
* GraphQL的工作方式与典型的RESTful API不同，前者方式的API提供任何实体子集，所以可以在任何嵌套级别查询任意属性，这使得GraphQL对于复杂对象的数据集更高效，相比之下REST设计通常需要多个请求才能获得相同数据。

#### 1. 服务器端添加GraphQL

```javascript
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = { hello: () => 'Hello world!' };

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));
app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));
```
server端要使用GraphQL需要添加一个路由'/graphql'，使用graphqlHTTP库来响应数据请求。
使用 GraphQL Schema Language 创建一个 schema，因为GraphQL是强类型的，它需要定义schema（数据结构是怎么样的）。

#### 2. 客户端使用GraphQL

```javascript
const query = clean`{
      movies {
        title,
        cover
      }
    }`

    axios.get(`/graphql?query=${query}`).then(response => {
      this.props.fetchMovies(response)
    })
```

[返回顶端](#GraphQL) [返回目录](../README.md)

