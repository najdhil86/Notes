# API Design Node V3

**Course Repro:** https://github.com/FrontendMasters/api-design-node-v3

Install MongoDB
Install Nodes

 
 ## API

 Q: What is API?

 * tldr; a server that creates an HTTP interface for interacting with some data
 
 *Notes from the slides:*

 * Application programming interface
 * The name is used EVERYWHERE
 * Usually a server on some remote machine that dictates how another application can interact with with some data
 * Basic data operations like, Create, Read, Update, Destroy (CRUD)

## REST

 *Notes from the slides:*

 * tldr; most populare API design pattern, but is not the silver bullet. Very blurry.
 * An API design that combines DB resources, route paths, and HTTP verbs to allow applications describe what action they are trying to perform
 * Popularized when SaaS products starting offering APIs for integrations
 * Works with basic data models
 * Hard to scale with complex data models and client requirements

## Node.js and APIs

***tldr; build for high concurrent APIs that are not CPU intensive ***

* Node.js is JavaScript, it's async and event driven.
* Single threaded (can optimize)
* When kept async, Node can handle a high amount of concurrent request
* Not great for CPU intensive work (data crunching, ML, big maths)
* So many open source tools to help build APIs

## Express(Introduction)

*Express Website: https://expressjs.com/*

***tldr; the standard API framework for Node.js***

* Handles all the tedious tasks like managing sockets, route matching, error handling, and more 
Open source
* Has a huge community and support from anything that has to do with APIs in Node.js
* Not going anywhere anytime soon
* Really simple to use

**Q: What does single threaded mean ?**

## Mongo DB (Introduction)

tldr; the go-to non-relational DB, works like a dream in Node.js

* Non-relational document store that is easy to get started and scales well
* Open source and backed by a big company
* Tons of hosting solutions
* ORM / ODM and other libs are some of the best for any DB
* Does not do everything well. Just like any DB

*MongoDB Website to install:*https://docs.mongodb.com/manual/administration/install-community/

## Code Repo Tour (Introduction)

npm install -g nodemon

https://nodemon.io/


## Express

### Setup Code & Express
Receiving data

app.get() - performing a get request

Sending or Creating Data

app.post('/') 

Use the command, "yarn dev"

app.get ('/',(req,res) => {

})

**Code Notes**

``` javascript
import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

//create a route that sends back some json
app.get('/', (req, res) => {
  res.send({message:"hi"})
})

//create a route that accepts json and logs it

app.post('/', (req, res) => {
  console.log(req.body);
  res.send({message:"ok"})
})

// the route can be same as long as the http verb is different

//start the server


export const start = () => {
  app.listen(3000, () => {
    console.log("server on 3000");
  })
}

```

### Using Insomnia

"/" - root

the entry point to the API

In Insomnia, we would do http://localhost:3000/

Sending data to the API

we duplicated the GET request to create a POST request where we switched to JSON to send data to the API

### Setting up Express Routes

Starting to create routes

```javascript

```

```javascript

//controller function
app.get('/data', (req,res) => {
    
})
```

example of get and post from notes

```javascript
import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/',(req,res) => {
    res.send({message:'hello'})
}) 
app.post('/', (req,res ) => {
    console.log(res.body);
    res.send({ message: 'okay'})
})



app.get('/data', (req,res) => {
    res.send({message:'hello'})
})

app.post('/data', (req,res) => {

    res.send(req.body);

})


export const start = () => {

     app.listen(3000,() => {
         console.log('server is on 3000'); 
     })
}

```

### Routing and Middleware

Q: What is Middleware?

tldr; list of functions that execute, in order, before your controllers

* Allow you to execute functions on an incoming request with guaranteed order.
* Great for authenticating, transforming the request, tracking, error handling.
* Middleware can also respond to request like a controller would, but that is not their intent.

**Q: What is CORS?** Discussed in this video

### Custom Middleware

Creating your own middleware

```javascript
import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()


app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))


//custom middleware

const log = (req, res,next) => {
  console.log("logging");
  next()
}

//next -> executes the next middleware
// next does not take arguments
// using a middleware globally

// app.use(log)

app.get('/data', [log, log, log], (req, res) => {
  res.send({data: [1,2,3]})
})

// app.get('/data',[log,log,log], (req, res) => {
//   res.send({data: [1,2,3]})
// })



export const start = () => {
  app.listen(4500, () => {
    console.log("server on 3000");
  })
}

```

### REST Routes with Express

tldr; Express was designed with REST in mind and has all you need

* Express has a robust route matching system that allows for exact, regex, glob, and parameter matching
* It also supports HTTP verbs on a route based level. Together with the routing, you can create REST APIs


Most of the time you will use an exact match

in ex "/data"

or 

with a parameter

ex. "/user/:id"

```javascript

// CRUD

//C - Create

app.post('/', (req,res) => {
    console.log(req.body)
    res.send({message:true})
})

//R - Read
app.get('/',(req,res) => {
    res.send({message:'hello'})
})

//Update

app.put('/data', (req,res) => {

})

//Destroy

app.delete('/data', (req,res) => {

})


```

### Route Order

Route Order matter !

### Router & Sub Routes

```javascript
import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.get('/me', (req, res) => {
  res.send({me:"hello"})
})

app.use('/api', router)


export const start = () => {
  app.listen(4500, () => {
    console.log("server on 4500");
  })
}

```

### Router Verb Methods

```javascript
import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.route('/cat')
  .get((req, res) => {
    res.send({me:"it's cat"})
  })
  .post()

router.route('/cat/:id')
  .get()
  .put()
  .delete()


app.use('/api',router)
export const start = () => {
  app.listen(4500, () => {
    console.log("server on 4500");
  })
}

```

Exercises:

Exercise 1:

# install dependencies with yarn (prefered for version locking) or npm
# create a route that sends back some json
# create a route that accepts json and logs it
# start the server

Exercise 2:

branch - lesson-2

test command - yarn test-routes or npm run test-routes

This exercise will have you creating routes and sub routers for our soon the be DB resources using Express routing and routers

 # create a router for the Item resource
 # create full crud routes and create placeholder controllers
 # mount router on the root server
 # ensure all tests pass by running test command