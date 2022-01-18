const { pool } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../schemas/tables");
User()

module.exports = {
        Mutation: {
            createUser: (_, {firstName, lastName, email, password}) => {
                let user = {firstName, lastName, email, password}
                const resolved = () => {
                    res.status(200).json({
                      message: "user registered",
                    });
                    return user
                  };
                  const rejected = (message) => {
                    res.status(401).json({
                      message,
                    });
                    // return {err: 'error'}
                  };
                
                  try {
                    pool.query("SELECT id FROM users", (err, res) => {
                      if (err) {
                        console.log(err);
                      } else {
                        let lastRow = res.rows[res.rows.length - 1];
                        register(lastRow !== undefined ? lastRow : { id: 0 });
                      }
                    });
                
                    const register = (idObj) => {
                      let id = (idObj.id += 1);
                      const query = {
                        text: "INSERT INTO users(id, firstName, lastName, email, password) VALUES($1, $2, $3, $4, $5)",
                        values: [id, firstName, lastName, email, password]
                      };
                
                      pool.query(query, (err, res) => {
                        if (err) {
                          rejected(err.stack);
                        } else {
                          resolved();
                        }
                      });
                    };
                
                    
                  } catch (err) {
                    rejected(err);
                  }
            },
            createRecipe: (_, {name, directions, timeNeeded}) => {
                const resolved = (id) => {
                    let userId = req.user.id
                    res.status(200).json({
                      message: "book entered sucessfully",
                      book: { id, name, snippet, deweyDecimal, review, userId},
                    });
                  };
                  const rejected = (message) => {
                    res.status(401).json({
                      message,
                    });
                  };
                
                  try {
                    pool.query("SELECT id FROM books", (err, res) => {
                      if (err) {
                        rejected(err);
                      } else {
                        let lastRow = res.rows[res.rows.length - 1];
                        sendBooks(lastRow !== undefined ? lastRow : { id: 0 });
                      }
                    });
                
                    const sendBooks = (idObj) => {
                      let id = (idObj.id += 1);
                      const query = {
                        text: "INSERT INTO books(id, name, snippet, deweyDecimal, review, userId) VALUES($1, $2, $3, $4, $5, $6)",
                        values: [id, name, snippet, deweyDecimal, review, req.user.id],
                      };
                
                      pool.query(query, (err, res) => {
                        if (err) {
                          rejected(err.stack);
                        } else {
                          resolved(id);
                        }
                      });
                    };
                  } catch (err) {
                    console.log(err);
                  }
            }
        }
}