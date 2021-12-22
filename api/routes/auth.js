const router = require("express").Router();
const bcrypt = require("bcrypt");
const con  = require('../db')
//REGISTER
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);
      let sql = `INSERT INTO users (username, email, password) VALUES ("${req.body.username}", "${req.body.email}", "${hashedPass}")`;
      con.query(sql, function (err, result) {
        if (err) throw err;
        res.status(200).json({ msg: 'User registered'});
      });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", (req, res) => {
  try {
      let sql = `SELECT * FROM users WHERE username="${req.body.username}"`
      con.query(sql, async function (err, result) {
        if (err) throw err;
        if (result.length === 0) {
          res.status(400).json({error: "Wrong user credentials!"});
        }
        else {
          const validated = await bcrypt.compare(req.body.password, result[0].password);
          if (!validated) {
            res.status(400).json({error: "Wrong credentials!"});
          }
          else {
            let user = result[0];
             res.status(200).json(user)
          }
        }  
      });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
