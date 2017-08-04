var mysql = require('mysql');
//填写数据库连接信息，可查询数据库详情页
var username = '2ef7a07d3dab42e9914dc2b6734bae96'; //用户AK
var password = 'b491265c4e3a4fa4b021235b3db997f4'; //用户SK';
var db_host = 'sqld.duapp.com';
var db_port = 4050;
var db_name = 'hzJmIZPKVmCrmttLhOih';
var option = {
  host: db_host,
  port: db_port,
  user: username,
  password: password,
  database: db_name
};
//连接数据库 //window mysql
var options_w = {
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'chenanjie123',
  database: 'datas'
}; 
//连接数据库 //mac mysql
var options_m = {
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '111111',
  database: 'data'
}; 
function query(sql, params, callback) {
  var client = mysql.createConnection(options_m);
  client.query(sql, params,function(err, data) {
    if (err) {
      console.log(err);
      callback({
        success: false,
        data: err
      });
    } else {
      callback({
        success: true,
        data: data
      });
    }
  });
  client.end();
}

module.exports = query;