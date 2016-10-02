/**
 * @Author: chenanjie
 * @Date:   2017-07-05T17:54:16+08:00
 * @Last modified by:   chenanjie
 * @Last modified time: 2017-07-05T21:39:35+08:00
 */



var dataBase = require('./dataBase.js');
/**
 * 登录
 */
exports.login = function(params, callback) {
    dataBase('SELECT * FROM anjie where userName = ? and passWord= ?', params, function(data) {
        if (data.success && data.data && data.data.length) {
            callback(true);
        } else {
            callback(false);
        }
    });
};
/**
 * 获取照片数据
 */
exports.getFile = function(parmas, callback) {
    dataBase("SELECT * FROM files where fileType = ? ", parmas, function(data) {
        console.log(data);
        if (data.success) {
            callback({
                msg: true,
                data: data
            });
        } else {
            callback({
                msg: false,
                data: {}
            });
        }
    });
}

/**
 * 添加照片文件
 */
exports.addPhoto = function(params, callback) {
    dataBase("INSERT INTO files(id,name,url,size,type,date,author,fileType) values(?,?,?,?,?,?,?,?)", params, function(data) {
        console.log(data);
        if (data.success) {
            callback({
                data: data.success
            })
        } else {
            callback({
                data: false
            })
        }
    });
}

/**
 * 删除照片文件
 */
exports.delPhoto = function(params, callback) {
    dataBase("DELETE FROM files WHERE files.id = ?", params, function(data) {
        console.log(data)
        if (data.success) {
            callback({
                data: data,
                msg: true
            })
        } else {
            callback({
                data: '',
                msg: false
            })
        }
    });
}