const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./app-data/td-quicknote.db');

// 这段代码用来测试 SQLite
console.log("db"+db);
db.serialize(function() {

  // db.run("CREATE TABLE lorem (info TEXT)");

  // var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  // for (var i = 0; i < 10; i++) {
  //     stmt.run("Ipsum " + i);
  // }
  // stmt.finalize();
  
  
  // let stmt=`INSERT INTO lorem VALUES ('ab')`;
  // db.run(stmt);

  // db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
  //     console.log(row.id + ": " + row.info);
  // });
  
});

const insert=(t)=>{
  // db.serialize(function() {
  //   let stmt=`INSERT INTO lorem (info)
  //              VALUES (ab)`;
  //   db.run(stmt);
  //   //stmt.finalize();

  //   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
  //     console.log(row.id + ": " + row.info);
  //   });

  // });  

  // db.close();
}

//db.close();
const getContent=(t)=>{
  let result;
  db.serialize(function() {
    // let stmt=`INSERT INTO lorem (info)
    //            VALUES (ab)`;
    // db.run(stmt);

    db.get("SELECT content FROM note_content WHERE note_id=$id ORDER BY uid DESC ",{$id:1}, (err,row)=>{
      console.log("server js 2 ");
      
      result=row['content'];

    });
    
  console.log("server result js");
    console.log(result);
    //stmt.finalize();
  });  

  db.close();
}


exports.insert=insert;
exports.select="";
exports.update="";
exports.delete="";

exports.getContent =getContent;


// // 这段代码用来测试 server 创建是否成功
// app.get('/test', function(req, res) {
//     res.json({
//         code: 0
//     })
// })

// var btn = document.getElementById('btn')
// btn.onclick = function() {
//     var server = app.listen(3000, function() {
//         var host = server.address().address
//         var port = server.address().port

//         console.log('Example app listening at http://%s:%s', host, port)
//     })
// }