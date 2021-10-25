var http = require('http');
var fs = require('fs');
var mysql = require('mysql')
var connect = {
    host: 'localhost',
    user: 'root',
    password: '8362',
    database: 'sw_db'
};
var connection = mysql.createConnection(connect); // DB 커넥션 생성
connection.connect();   // DB 접속

var createQuery = "CREATE TABLE sub_key(\
sub_code INT,\
sub_class INT,\
PRIMARY KEY(sub_code)\
);";

connection.query(createQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});

testQuery = "INSERT INTO `sub_key` (`sub_code`,`sub_class`) VALUES ('12345','001');";
 
connection.query(testQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});

createQuery = `SELECT * FROM sub_key`;

connection.query(createQuery, function (err, results, fields) { // testQuery 실행
    if (err) {
        console.log(err);
    }
    console.log(results);
});
connection.end();

var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/html/index.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
 
});
app.listen(8080);	