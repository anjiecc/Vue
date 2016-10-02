<template>
  <div class="delPhoto" id="delPhoto">
    <!-- <div class="row">
        <div class="col-sm-6 col-xs-6 col-md-3" v-for="item in fileList">
          <div class="thumbnail">
            <img :src="item.url" alt="" class="" style="height:300px">
            <div class="caption">
              <p>创建者:{{item.author}}</p>
              <p>创建时间:{{item.date}}</p>
              <p><a href="#" class="btn btn-primary" role="button">删除</a></p>
            </div>
          </div>
        </div>
      </div> -->
  </div>
</template>
<script>
import marked from 'marked';

export default {
  data() {
    return {
      fileList: []
    }
  },
  mounted() {
    // hljs.initHighlightingOnLoad();
    this._init();

  },
  methods: {
    _init() { 
      var rendererMD = new marked.Renderer();
      marked.setOptions({
        renderer: rendererMD,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false
        // highlight: function (code) {
        //   return hljs.highlightAuto(code).value;
        //   }   
        });
      this.$http.get("/file/getPhoto?fileType=md").then(data => {
          if(data.body && data.body.msg){
              document.getElementById('delPhoto').innerHTML = marked(data.body.data.data[0].url);
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
