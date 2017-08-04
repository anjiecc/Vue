<template>
  <div class="preView" id="preView">
    <div class="row">
      <div class="col-sm-6 col-xs-6 col-md-3" v-for="item in fileList">
        <div class="thumbnail" @click="preView(item.id)">
          <img :src="item.url" alt="" class="" style="height:300px">
          <div class="caption">
            <p>创建者:{{item.author}}</p>
            <p>创建时间:{{item.date}}</p>
          </div>
        </div>
      </div>
    </div>
    <el-dialog title="预览" :visible.sync="dialogTableVisible" size="full">
      <el-carousel :interval="4000" type="card" :height="height" :initial-index="index">
        <el-carousel-item v-for="item in fileList" :key="item">
          <img :src="item.url" alt="" class="" width="100%" height="100%">
        </el-carousel-item>
      </el-carousel>
    </el-dialog>
    <!--<div class="body">
      <el-carousel :interval="4000" type="card" :height="height">
        <el-carousel-item v-for="item in fileList" :key="item">
          <!--<h3>{{ item }}</h3>-->
          <!--<img :src="item.url" alt="" class="" width="100%" height="100%">
        </el-carousel-item>
      </el-carousel>
    </div>-->
  </div>
</template>
<script>
// import $ from './jquery.js';
export default {

  data() {
    return {
      fileList: [],
      height: (document.documentElement.clientHeight - 120) + 'px',
      dialogTableVisible: false,
      index:0
    }
  },
  mounted() {
    this._init();
    // $(window).on('resize', _.debounce(this.resize.bind(this), 1000));
    window.addEventListener("resize",_.debounce(this.resize.bind(this), 1000));
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
    preView(id) {
      // console.log(id);
      this.dialogTableVisible = true;
      _.each(this.fileList,(item,i) => {
        if(item.id === id){
          this.index = i;
          return;
        }
      });
    },
    resize() {
      var _clientWidth = document.documentElement.clientWidth;

      var _clientHeight = document.documentElement.clientHeight;

      this.height = `${(_clientHeight - 120)}px`;

    }
  }
}
</script>
<style>
.preView p {
  margin: 0;
  padding: 0;
}

.preView .caption {
  background: rgb(72, 87, 106);
  color: #fff;
}

.preView .thumbnail {
  cursor: pointer;
}

.body {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.65);
}


/*.preView .el-carousel__container{
  height: 475px;
}*/

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
