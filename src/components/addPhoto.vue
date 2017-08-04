<template>
  <div id="addPhoto">
    <!-- <el-row :gutter="24">
      <el-col :xs="1" :sm="1" :md="1" :lg="1"> -->
    <div class="grid-content bg-purple"></div>
    <el-upload class="upload-demo" action="/file/upload" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList2" list-type="picture" :before-upload="beforeLoad" :on-success="uploadSuccess">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，列表会显示最近一天添加的照片</div>
    </el-upload>
    <!-- </el-col>
    </el-row> -->
  </div>
</template>
<script>
const typeArray = ['image/jpeg','image/png'];
export default {
  data() {
    return {
      fileList2: [],
      author: document.cookie
    };
  },
  mounted() {
    this._init();
  },
  methods: {
    _init() { //初始化获取全部文件数据
      this.$http.get("/file/getFile?fileType=photo").then(data => {
        console.log(data);
        var currentTime = new Date().getTime() - 86400000;
        
        if(data.body && data.body.msg){
          _.each(data.body.data.data,(item => {
             var _time = new Date(item.date).getTime();
             if(currentTime < +item.id.split("'")[1]){
                this.fileList2.push({
                  name:item.name,
                  url:item.url
                });
             }
          }));
        }
      });
    },
    handleRemove(file, fileList) { //删除文件回调
      // console.log(file, fileList);
    },
    handlePreview(file) { //点击已上传的文件链接时回调
      // console.log(file);
    },
    beforeLoad(file) { //上传之前回调
      // console.log(file);
      if (typeArray.indexOf(file.type) < 0) {
                this.$notify.error({
                    title: '错误',
                    message: "目前只支持jpg/jpeg/png格式的文件!"
                });
                return false;
            }
    },
    uploadSuccess(res, file, fileList) { // 上传成功回调
      if (res.type) {
        var _url = `/file/addFile?id='${new Date().getTime()}'&name=${file.name}&url=${res.originalUrl}&size=${res.size}&date=${new Date(new Date().getTime()).toLocaleString()}&author=${this.author.split(';')[0]}&type=${res.headers['content-type']}&fileType=photo`;
        this.$http.get(_url).then(data => {console.log(data);
          if (data.body.data) {
            this.$notify({
              title: '成功',
              message: '添加照片成功!',
              type: 'success'
            });
          }
        });
      }
    }
  }
}
</script>
<style media="screen">
#addPhoto input[type="file"] {
  display: none;
}
#addPhoto .upload-demo,#addPhoto .el-upload__tip{
  text-align: left;
}
#addPhoto .el-upload.el-upload--picture{
  margin:5px 0 0 5px;
}
</style>
