/**
 * @Author: chenanjie
 * @Date:   2017-07-05T17:50:18+08:00
 * @Last modified by:   chenanjie
 * @Last modified time: 2017-07-10T10:56:17+08:00
 */
/*global require*/
var express = require('express');
var router = express.Router();
var service = require('./apiService.js');
var multiparty = require('multiparty');
var fs = require('fs');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

/**
 * 登录
 */
router.get('/login', function(req, res) {
    var userName = req.query.userName;

    var passWord = req.query.passWord;

    var array = [userName, passWord];

    service.login(array, function(data) {
        if (data) {
            console.log('登录成功!');
            res.send({
                data: data,
                userName: userName
            });
        } else {
            console.log('登录失败!');
            res.send({
                data: data,
                userName: ""
            });
        }
    });
});

/**
 * 上传接口
 */
router.post('/file/upload', function(req, res) {
    //生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({
        uploadDir: './static'
    });

    //上传完成后处理
    form.parse(req, function(err, fields, files) {
        var filesTmp = JSON.stringify(files, null, 2);
        if (err) {
            console.log('parse error: ' + err);
        } else {
            console.log('parse files: ' + filesTmp);
            var file = files.file[0];

            var uploadedPath = file.path;

            var dstPath = './static/' + file.originalFilename;

            var headers = file.headers;

            var size = file.size;
            //重命名为真实文件名
            fs.rename(uploadedPath, dstPath, function(err) {
                if (err) {
                    console.log('rename error: ' + err);
                    res.send({
                        type: false,
                        msg: err
                    });
                } else {
                    console.log('rename ok');
                    res.send({
                        type: true,
                        url: uploadedPath,
                        originalUrl: dstPath,
                        headers: headers,
                        size: size,
                        msg: 'upload success'
                    });
                }
            });
        }
    });
});

/**
 * 获取图片资源
 */
router.get('/file/getPhoto', function(req, res) {
    var _type = req.query.fileType;

    service.getFile([_type], function(data) {
        res.send(data);
    });
});

/**
 * 添加照片接口
 */
router.get('/file/addPhoto', function(req, res) {
    var _data = req.query;

    var id = _data.id;

    var name = _data.name;

    var url = _data.url;

    var size = _data.size;

    var date = _data.date;

    var author = _data.author;

    var type = _data.type;

    var fileType = _data.fileType;

    var params = [id, name, url, size, type, date, author, fileType];

    service.addPhoto(params, function(data) {
        res.send(data);
    });
});

/**
 * 删除照片接口
 */
router.get('/file/delPhoto', function(req, res) {
    var _id = req.query.id;

    service.delPhoto([_id], function(data) {
        res.send(data);
    });

});

router.get('/getData', function(req, res) {
    res.send({
        data: [1, 2, 3],
        success: true
    })
});

router.post('/file/add', (req, res) => {
    var data = req.body.data;
    var _param = [data.id, data.name, data.url, data.size, data.type, data.date, data.author, data.fileType];
    service.addPhoto(_param, function(data) {
        res.send(data);
    });

});
module.exports = router;