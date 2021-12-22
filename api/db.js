const mysql = require('mysql2');
require('dotenv').config();
console.log(process.env.MYSQLDATABASE, process.env.MYSQLPASSWORD, process.env.MYSQLUSER, process.env.MYSQLPORT, process.env.MYSQLHOST)
const con = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    port: process.env.MYSQLPORT,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE,
  });
  
  con.connect((err) => {
    if (err) {
      return console.error('error: ' + err.message);
    }
    console.log('Connected to the MySQL server.');
    return;
    let a = 1;
    let desc = `<p>It&#39;s not only writers who can benefit from this free online tool. If you&#39;re a programmer who&#39;s working on a project where blocks of text are needed, this tool can be a great way to get that. It&#39;s a good way to test your programming and that the tool being created is working well.</p>\n\n<p>Above are a few examples of how the random paragraph generator can be beneficial. The best way to see if this random paragraph picker will be useful for your intended purposes is to give it a try. Generate a number of paragraphs to see if they are beneficial to your current project.</p>\n\n<p>If you do find this paragraph tool useful, please do us a favor and let us know how you&#39;re using it. It&#39;s greatly beneficial for us to know the different ways this tool is being used so we can improve it with updates. This is especially true since there are times when the generators we create get used in completely unanticipated ways from when we initially created them. If you have the time, please send us a quick note on what you&#39;d like to see changed or added to make it better in the future.</p>`;
    const inter = setInterval(() => {
      con.query(`insert into articles (title, description, photo, username, slug) values("Proper Article ${a}","${desc}","https://i.ibb.co/6gGBkPp/1639489768300-Rectangle-133.jpg","sudonick", "proper-article-${a}")`,() =>{
        console.log("done boi")
      })
      a++;
      if(a===61){
        clearInterval(inter)
      }
    }, 1000);
  //   const userTable = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(20) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, `date` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);";
  //   const articleTable = "CREATE TABLE articles (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255) NOT NULL UNIQUE, description TEXT NOT NULL, photo VARCHAR(255) NOT NULL, likes INT DEFAULT 0, username VARCHAR(20) NOT NULL, slug VARCHAR(255) NOT NULL, date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP);"
  //   // con.query(userTable, function (err, result) {
  //   //   if (err) throw err;
  //   //   console.log("User table created");
  //   // });
  //   con.query(articleTable, function (err, result) {
  //     if (err) console.log(err);
  //     else console.log("Article table created");
  //   });
  });

  module.exports = con;
  