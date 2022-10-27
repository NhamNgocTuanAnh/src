# Tạo CRUD

**Chú thích:**

1 tutorial bao gồm:

* title
* description
* published

## Create Node.js application

```
mkdir nodejs-express-mysql
cd nodejs-express-mysql
npm install express mysql cors --save
```

Cấu hình file **package.json**

```
{
  "name": "nodejs-express-mysql",
  "version": "1.0.0",
  "description": "Node.js Restful CRUD API with Node.js, Express and MySQL",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "nodejs",
    "express",
    "mysql",
    "restapi"
  ],
  "author": "Tepa",
  "license": "ISC",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.1",
    "mysql": "^2.18.1"
  }
}
```

## Setup Express web server

```
const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Tepa application." });
});

require("./app/routes/tutorial.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
```

## Create MySQL table

```
mysql>CREATE TABLE IF NOT EXISTS `tutorials` (
  id int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title varchar(255) NOT NULL,
  description varchar(255),
  published BOOLEAN DEFAULT false
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

## Configure & Connect to MySQL database

create `db.config.js` file inside that config folder with content like this:

```
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "123456",
  DB: "testdb"
};
```

Now create a database connection that uses configuration above.

The file for connection is db.js, we put it in app/models folder that will contain model in the next step.

```
const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

module.exports = connection;
```

## Define the Model

In models folder, create a file called ``tutorial.model.js``. We’re gonna define constructor for Tutorial object here, and use the database connection above to write CRUD functions:

* create a new Tutorial
* find a Tutorial by id
* get all Tutorials
* get all published Tutorials
* update a Tutorial by id
* remove a Tutorial
* remove all Tutorials

This is the content inside `tutorial.model.js`:

```
```

Tutorial model is simple, it contains fields: title, description & published.

We use database connection query() method to execute MySQL script: **INSERT, SELECT, UPDATE, DELETE**. You can find more details about mysql module at:

## Define Routes

When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), we need to determine how the server will response. It’s why we’re gonna setup the routes.

These are routes we define:

* /tutorials: GET, POST, DELETE
* /tutorials/:id: GET, PUT, DELETE

Create a routes folder inside app folder, then create tutorial.routes.js file with content like this:

```
module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);

  app.use('/api/tutorials', router);
};
```

You can see that we use a controller from /controllers/tutorial.controller.js. It contains methods for handling CRUD operations and will be created in the next step.

We also need to include routes in server.js (right before app.listen()):

```
...

require("./app/routes/tutorial.routes.js")(app);

app.listen(...);
```

## Create the Controller

Now we create a controllers folder inside app folder, then we have a file named tutorial.controller.js. Our controller will be written inside this with CRUD functions:

* create
* findAll
* findOne
* findAllPublished
* update
* delete
* deleteAll

```
const Tutorial = require("../models/tutorial.model.js");

// Create and Save a new Tutorial
exports.create = (req, res) => {

};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {

};

// Find a single Tutorial with a id
exports.findOne = (req, res) => {

};

// find all published Tutorials
exports.findAllPublished = (req, res) => {

};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};
```

Let’s implement these functions.

## Create a new object

Create and Save a new Tutorial:

```
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  });

  // Save Tutorial in the database
  Tutorial.create(tutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};
```

## Retrieve objects

Retrieve all Tutorials from the database (with or without condition):

```
// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Tutorial.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

exports.findAllPublished = (req, res) => {
  Tutorial.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};
```

Delete an object
Delete a Tutorial with the specified id in the request:

```
exports.delete = (req, res) => {
  Tutorial.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Tutorial with id " + req.params.id
        });
      }
    } else res.send({ message: `Tutorial was deleted successfully!` });
  });
};
```
