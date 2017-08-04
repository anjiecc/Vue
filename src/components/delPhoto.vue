<template>
  <div class="delPhoto" id="delPhoto">
    <div class="row">
      <div class="col-sm-6 col-xs-6 col-md-3" v-for="item in fileList">
        <div class="thumbnail">
          <img :src="item.url" alt="" class="" style="height:300px">
          <div class="caption">
            <p>创建者:{{item.author}}</p>
            <p>创建时间:{{item.date}}</p>
            <p>
              <a href="javascript:void 0" class="btn btn-primary" role="button" @click="delPhoto(item.id,item.url)">删除</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fileList: []
    }
  },
  mounted() {
    this._init()
  },
  methods: {
    _init() { //初始化获取全部文件数据
      this.$http.get("/file/getFile?fileType=photo").then(data => {
        console.log(data);
        if (data.body && data.body.msg) {
          this.fileList = [];
          _.each(data.body.data.data, (item => {
            this.fileList.push({
              id: item.id,
              name: item.name,
              url: item.url,
              author: item.author,
              date: item.date
            });
          }));
        }
      });
    },
    delPhoto(id,url) {
      var url = `/file/delFile?id=${id}&path=${url}`;
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$http.get(url).then(data => {
          if (data.body && data.body.msg) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this._init();
            var _url = `/file/delFile`
            this.$http.get()
          }
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    }
  }
}
</script>
<style>
.delPhoto p {
  margin: 0;
  padding: 0;
}

.delPhoto .caption {
  background: rgb(72, 87, 106);
  color: #fff;
}
</style>
