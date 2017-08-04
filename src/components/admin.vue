<template>
<div id="admin">
  <div class="nav">
    <div class="nav-wrap">
      <h3 class="title">anjiecc.cn</h3>
      <div class="user">
        <i class="glyphicon glyphicon-user"></i>
        <span>{{userName}}</span>
      </div>
    </div>
  </div>
  <!-- <div class="content"> -->
    <div class="left-menu">
      <el-menu default-active="/admin" :router="isPath" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <!-- <el-submenu index="/admin"> -->
          <!-- <template slot="title"><i class="el-icon-document"></i>文章</template> -->
          <el-menu-item-group title="文章">
            <el-menu-item index="/admin/addJs"><i class="el-icon-document"></i>在线编辑</el-menu-item>
            <el-menu-item index="/admin/uploadJs"><i class="el-icon-document"></i>上传文章</el-menu-item>
            <el-menu-item index="/admin/delJs"><i class="el-icon-document"></i>删除文章</el-menu-item>
          </el-menu-item-group>
        <!-- </el-submenu> -->
        <!-- <el-submenu index="/admin/preView"> -->
          <!-- <template slot="title"><i class="el-icon-picture"></i>相册</template> -->
          <el-menu-item-group title="相册">
            <el-menu-item index="/admin/addPhoto"><i class="el-icon-document"></i>添加照片</el-menu-item>
            <el-menu-item index="/admin/delPhoto"><i class="el-icon-document"></i>删除照片</el-menu-item>
            <el-menu-item index="/admin/preView"><i class="el-icon-document"></i>预览照片</el-menu-item>
          </el-menu-item-group>
        <!-- </el-submenu> -->
        <el-menu-item index="2"><i class="el-icon-setting"></i>监控分析</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-more"></i>编辑</el-menu-item>
      </el-menu>
    </div>
    <div class="right-content">
        <router-view></router-view>
    </div>
  <!-- </div> -->

  <div class="footer">
    <p>Copyright &copy; 2017.5&nbsp;<a target="_blank" href="http://www.anjiecc.cn">anjiecc.cn</a></p>
  	<p><a target="_blank" href="http://www.anjiecc.cn">蜀ICP备 &nbsp;17017451号</a></p>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      isPath:true,
      userName: document.cookie
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style>
h1,h2,h3{
  margin: 6px 0 0 0;
}
#admin .title{
  float: left;
}
#admin .user{
  float: right;
}
#admin .nav-wrap{
  padding:0 5px;
}
/*#admin .content{
  display: flex;
}*/
#admin .right-content{
   position: absolute;
    top: 40px;
    bottom: 40px;
    left: 170px;
    width: calc(100% - 170px);
    overflow: auto;
}
#admin .nav{
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #48576a;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  color:#fff;
}
#admin .footer {
  width: 100%;
  height: 40px;
  background-color: #48576a;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 100;
  color:#fff;
}
#admin .footer p{
  margin:0;
}
#admin .left-menu {
  background-color: #eef1f6;
  position: absolute;
  width: 170px;
  overflow: auto;
  /*height: 100%;*/
  top: 40px;
  bottom:40px;
  z-index: 0;
}
</style>
