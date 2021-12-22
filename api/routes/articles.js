const router = require("express").Router();
const slugify = require('slugify');
const con  = require('../db')




//CREATE POST
router.post("/", async (req, res) => {
  try {
    const slug = slugify(req.body.title, { lower: true, strict: true })
    let sql = `INSERT INTO articles (title, description, photo, username, slug) VALUES ("${req.body.title}",'${req.body.desc}',"${req.body.photo}","${req.body.username}", "${slug}")`
    con.query(sql, function(err, result) {
      if (err) throw err;
      req.body.slug = slug;
      res.status(201).json(req.body)
    })
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:slug", async (req, res) => {
  try {
    let sql = `SELECT * FROM articles WHERE slug="${req.params.slug}"`
    con.query(sql, function(err, result) {
      if (result.length !== 0) {
        if (result[0].username === req.body.username) {
          try {
            let newSlug = slugify(req.body.title,{ lower: true, strict: true })
            sql = `UPDATE articles SET title="${req.body.title}", description='${req.body.desc}', slug="${newSlug}" WHERE slug="${req.params.slug}"`
            con.query(sql, function(err, result) {
              if (err) throw err;
              req.body.slug = newSlug;
              res.status(200).json(req.body);
            })
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.status(401).json("You can update only your post!");
        }
      }
      else {
        res.status(400).json( "no such article")
      }
    })
   
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post("/:slug/comment", async (req, res) => {
//   const post = await Post.findOne({ slug: req.params.slug });
 
//       try {
//         post.comments.push({ name: req.body.commenter, message: req.body.comment })
//         await post.save();
//       } catch (error) {
//         console.log(error);
//       }

// })

// router.get("/:slug/comment", async (req, res) => {
//   const post = await Post.findOne({ slug: req.params.slug });
//       try {
//         res.status(200).json(post.comments);
//       } catch (error) {
//         console.log(error);
//       }

// })

//DELETE POST
router.delete("/:slug", async (req, res) => {
  try {
    let sql = `SELECT * FROM articles WHERE slug="${req.params.slug}"`
    con.query(sql, function(err, result) {
      if (result.length !== 0) {
        if (result[0].username === req.body.username) {
          sql = `DELETE FROM articles WHERE slug="${req.params.slug}"`
          con.query(sql, function(err, result) {
            if (err) throw err;
            res.status(200).json('Article deleted');
          })
        }
        else {
          res.status(401).json("You can delete only your article!");
        }
      }
    })
  } catch (error) {
      res.status(500).json(error)
  }
})

//GET POST
router.get("/:slug", async (req, res) => {
  try {
    let sql = `SELECT * FROM articles WHERE slug="${req.params.slug}"`
    con.query(sql, function(err, result) {
      res.status(200).json(result[0])
    })
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const username = req.query.user;
  try {
    if (username) {
      let sql = `SELECT * FROM articles WHERE username="${username}"`
      con.query(sql, function(err, result) {
        res.status(200).json(result);
      })
    }
    else {
      let sql = `SELECT * FROM articles`
      con.query(sql, function(err, result) {
        res.status(200).json(result);
      })
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.patch("/:slug/like", async (req, res) => {
  try {
    // console.log('yooo');
    // console.log(req.param);
    let sql = `UPDATE articles SET likes=likes+1 WHERE slug="${req.params.slug}"`;
    con.query(sql, function(err, result) {
      if (err) throw err;
      res.status(200).json({success: true});
    })
  } catch (error) {
    res.status(500).json(err);
    console.log(err)
  }
})

// GET PAGINATED POSTS
router.get("/page/:page_no", async (req, res) => {
  const pageNo = req.params.page_no;
  try {
      let sql = `select * from articles order by date desc limit 6 offset ${(pageNo-1)*6}`;
      var count = 0;
      con.query(`select count(*) as count from articles`, (err, result) => {
        count = result[0].count;
      });
      con.query(sql, function(err, result) {
        if(err) throw err;
        res.status(200).json([...result, {count}]);
      })
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET POST BASED ON SEARCH STRING
router.get("/search/:search_string/:page_number", async (req, res) => {
  const searchString = req.params.search_string;
  const pageNo = req.params.page_number;
  console.log(searchString)
  try {
      let query = `select * from articles where title like "%${searchString}%" or description like "%${searchString}%" order by date desc limit 6 offset ${(pageNo-1)*6}`;
      var count = 0;
      con.query(`select count(*) as count from articles where title like "%${searchString}%" or description like "%${searchString}%"`, (err, result) => {
        count = result[0].count;
      });
      con.query(query, function(err, result) {
        if(err) throw err;
        res.status(200).json([...result, {count}]);
      })
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
