const { pool } = require("../db");

const User = () => {
  pool.query(
    "CREATE TABLE IF NOT EXISTS users (id integer NOT NULL UNIQUE, firstName varchar(255), lastName varchar(255), email varchar(255) NOT NULL UNIQUE, password varchar(255), PRIMARY KEY(id));",
    (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log("CREATE TABLE IF NOT EXISTS users");
      }
    }
  );
};

const Recipe = () => {

  pool.query(
    "CREATE TABLE IF NOT EXISTS recipe (id integer NOT NULL UNIQUE, name varchar(255), directions varchar(1000), timeNeeded integer NOT NULL UNIQUE, userId integer, FOREIGN KEY (userId) REFERENCES users(id));",
    (err, res) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log("CREATE TABLE IF NOT EXISTS recipe");
      }
    }
  );
};


const Ingredients = () => {

    pool.query(
      "CREATE TABLE IF NOT EXISTS recipe (id integer NOT NULL UNIQUE, name varchar(255), directions varchar(1000), timeNeeded integer NOT NULL UNIQUE, userId integer, FOREIGN KEY (userId) REFERENCES users(id));",
      (err, res) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log("CREATE TABLE IF NOT EXISTS ingredients");
        }
      }
    );
  };
  
  


// const queries = ['DROP TABLE users', 'DROP TABLE books']
// pool.query(queries[1])

module.exports = {
  User,
  Recipe,
  Ingredients
};
