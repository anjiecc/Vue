<template>
  <div class="delPhoto" id="delPhoto">
    <div class="row">
        <div class="col-sm-6 col-xs-6 col-md-3" v-for="item in fileList">
          <div class="thumbnail">
            <img :src="item.url" alt="" class="" style="height:300px">
            <div class="caption">
              <p>创建者:{{item.author}}</p>
              <p>创建时间:{{item.date}}</p>
              <p><a href="javascript:void 0" class="btn btn-primary" role="button" @click="delPhoto(item.id)">删除</a></p>
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
      this.$http.get("/file/getPhoto?fileType=\"photo\"").then(data => {
        console.log(data);
        if (data.body && data.body.msg) {
          this.fileList = [];
          _.each(data.body.data.data, (item => {
            this.fileList.push({
              id:item.id,
              name: item.name,
              url: item.url,
              author: item.author,
              date:item.date
            });
          }));
        }
      });
    },
    delPhoto(id){
      var url = `/file/delPhoto?id=${id}`;

      this.$http.get(url).then(data => {
        if(data.body && data.body.msg){
          this._init();
        }
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
