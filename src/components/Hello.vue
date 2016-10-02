<template>
  <div class="hello">
    <nav class="home-nav">
        <ul class="home-nav-ul">
            <li><a href="#" class="home-nav-actived nav-a"><i class="glyphicon glyphicon-home"></i>Home</a>
                <div class="home-s"></div>
            </li>
            <li><a href="#" class="nav-a"><i class="glyphicon glyphicon-camera"></i>Portfolio</a>
                <div class="home-s"></div>
            </li>
            <li><a href="#" class="nav-a"><i class="glyphicon glyphicon-bitcoin"></i>Blog</a>
                <div class="home-s"></div>
            </li>
            <li><a href="#" class="nav-a"><i class="glyphicon glyphicon-home"></i>Pages</a>
                <div class="home-s"></div>
            </li>
            <!-- <li><a href="/login" class="nav-a"><i class="glyphicon glyphicon-save"></i>Admin</a>
                <div class="home-s"></div>
            </li> -->
            <li><router-link to="/login"><i class="glyphicon glyphicon-save"></i>Admin</router-link>
                <div class="home-s"></div>
            </li>
        </ul>
    </nav>
    <div class="home-title">
        <h1>Anjiecc.cn</h1>
    </div>
    <div>
        <ol class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">Library</a></li>
            <li class="active">Data</li>
        </ol>
    </div>
    <div class="home-content container-fluid">
        <div class="row">
            <div class="col-md-3">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Recipient's username" aria-describedby="basic-addon2">
                    <span class="input-group-addon glyphicon glyphicon-search" id="basic-addon2"></span>
                </div>
                <p class="home-content-left-title">BLOG CATEGORIES</p>
                <div class="home-left-list">
                    <i class="glyphicon glyphicon-plus"></i>
                    <span class="home-list-info">JavaScript</span>
                    <span class="home-left-list-num">12</span>
                </div>
                <div class="home-left-list">
                    <i class="glyphicon glyphicon-plus"></i>
                    <span class="home-list-info">Html+Css</span>
                    <span class="home-left-list-num">19</span>
                </div>
                <div class="home-left-list">
                    <i class="glyphicon glyphicon-plus"></i>
                    <span class="home-list-info">AngularJs</span>
                    <span class="home-left-list-num">23</span>
                </div>
                <div class="home-left-list">
                    <i class="glyphicon glyphicon-plus"></i>
                    <span class="home-list-info">VueJs</span>
                    <span class="home-left-list-num">12</span>
                </div>
                <div class="home-left-list">
                    <i class="glyphicon glyphicon-plus"></i>
                    <span class="home-list-info">jQuery</span>
                    <span class="home-left-list-num">12</span>
                </div>
                <div class="home-left-list">
                    <i class="glyphicon glyphicon-plus"></i>
                    <span class="home-list-info">个人相册</span>
                    <span class="home-left-list-num">82</span>
                </div>
                <div class="home-left-list">
                    <i class="glyphicon glyphicon-plus"></i>
                    <span class="home-list-info">日志</span>
                    <span class="home-left-list-num">23</span>
                </div>
                <div class="home-left-list">
                    <i class="glyphicon glyphicon-plus"></i>
                    <span class="home-list-info">其他</span>
                    <span class="home-left-list-num">12</span>
                </div>
                <p class="home-content-left-title">BLOG CATEGORIES</p>
                <div class="row home-left-info-list">
                    <div class="col-md-3">
                        <img src="../assets/gallery_1.jpg" width="100%" height="100%">
                    </div>
                    <div class="col-md-9">
                        <p>好好速度户数的火速的呼声读书胆红素胆红素好读书</p>
                        <p>10,JavaScript,23</p>
                    </div>
                </div>
                <div class="row home-left-info-list">
                    <div class="col-md-3">
                        <img src="../assets/gallery_2.jpg" width="100%" height="100%">
                    </div>
                    <div class="col-md-9">
                        <p>好好速度户数的火速的呼声读书胆红素胆红素好读书</p>
                        <p>10,JavaScript,23</p>
                    </div>
                </div>
                <div class="row home-left-info-list">
                    <div class="col-md-3">
                        <img src="../assets/gallery_3.jpg" width="100%" height="100%">
                    </div>
                    <div class="col-md-9">
                        <p>好好速度户数的火速的呼声读书胆红素胆红素好读书</p>
                        <p>10,JavaScript,23</p>
                    </div>
                </div>
                <div class="row home-left-info-list">
                    <div class="col-md-3">
                        <img src="../assets/gallery_4.jpg" width="100%" height="100%">
                    </div>
                    <div class="col-md-9">
                        <p>好好速度户数的火速的呼声读书胆红素胆红素好读书</p>
                        <p>10,JavaScript,23</p>
                    </div>
                </div>
                <div class="row home-left-info-list">
                    <div class="col-md-3">
                        <img src="../assets/gallery_4.jpg" width="100%" height="100%">
                    </div>
                    <div class="col-md-9">
                        <p>好好速度户数的火速的呼声读书胆红素胆红素好读书</p>
                        <p>10,JavaScript,23</p>
                    </div>
                </div>
                <p class="home-content-left-title">BLOG CATEGORIES</p>
                <div class="row">
                    <div class="col-md-12">
                        <button class="home-left-label">123</button>
                        <button class="home-left-label">javascript</button>
                        <button class="home-left-label">html</button>
                        <button class="home-left-label">html+css</button>
                        <button class="home-left-label">AngularJs</button>
                        <button class="home-left-label">Java</button>
                        <button class="home-left-label">MySql</button>
                        <button class="home-left-label">123</button>
                        <button class="home-left-label">javascript</button>
                        <button class="home-left-label">html</button>
                        <button class="home-left-label">html+css</button>
                        <button class="home-left-label">AngularJs</button>
                        <button class="home-left-label">Java</button>
                        <button class="home-left-label">MySql</button>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                 <img src="../assets/blog_listing.jpg" width="100%" height="100%">
                <!-- <img src="../assets/blog_listing.jpg" width="100%" height="100%"> -->
                <div class="home-center-title">
                    <span>原创文章</span>
                    <ul>
                        <li><a href="#">热门</a></li>
                        <li><a href="#">最新</a></li>
                    </ul>
                </div>
                <div class="row">
                    <div class="col-md-9">
                        <ul class="home-right-list">
                            <li>
                                <div class="home-right-author">
                                    <div class="home-right-author-img">
                                        <img src="../assets/gallery_3.jpg" width="100%" height="100%">
                                    </div>
                                    <span>xxxxxx&nbsp;&nbsp;.</span>
                                    <span>&nbsp;&nbsp;1小时前</span>
                                </div>
                                <div>
                                    <img src="../assets/blog_listing.jpg">
                                </div>
                                <div class="home-right-info">
                                    <a href="#">图解 React Virtual DOM</a>
                                    <a href="#">作者： 阿希 （沪江 Web 前端开发工程师）本文原创，转载请注明作者及出处。 了解 React 的人几乎都听过说 Virtual DOM，甚至不了解 React 的人也听过 Virtual DOM。那么 React 的 Virtual DOM 到底长什么样子呢？今天我们将一探 R…</a>
                                </div>
                                <div class="home-right-job">
                                    <ul>
                                        <li>
                                            <div class="glyphicon glyphicon-heart"></div>
                                            <span>12</span>
                                        </li>
                                        <li>
                                            <div class="glyphicon glyphicon-comment"></div>
                                            <span>20</span>
                                        </li>
                                    </ul>
                                    <div>
                                        <a href="#">阅读全文</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="home-right-author">
                                    <div class="home-right-author-img">
                                        <img src="../assets/gallery_3.jpg" width="100%" height="100%">
                                    </div>
                                    <span>xxxxxx&nbsp;&nbsp;.</span>
                                    <span>&nbsp;&nbsp;1小时前</span>
                                </div>
                                <div>
                                    <img src="../assets/blog_listing.jpg">
                                </div>
                                <div class="home-right-info">
                                    <a href="#">图解 React Virtual DOM</a>
                                    <a href="#">作者： 阿希 （沪江 Web 前端开发工程师）本文原创，转载请注明作者及出处。 了解 React 的人几乎都听过说 Virtual DOM，甚至不了解 React 的人也听过 Virtual DOM。那么 React 的 Virtual DOM 到底长什么样子呢？今天我们将一探 R…</a>
                                </div>
                                <div class="home-right-job">
                                    <ul>
                                        <li>
                                            <div class="glyphicon glyphicon-heart"></div>
                                            <span>12</span>
                                        </li>
                                        <li>
                                            <div class="glyphicon glyphicon-comment"></div>
                                            <span>20</span>
                                        </li>
                                    </ul>
                                    <div>
                                        <a href="#">阅读全文</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="home-right-author">
                                    <div class="home-right-author-img">
                                        <img src="../assets/gallery_3.jpg" width="100%" height="100%">
                                    </div>
                                    <span>xxxxxx&nbsp;&nbsp;.</span>
                                    <span>&nbsp;&nbsp;1小时前</span>
                                </div>
                                <div>
                                    <img src="../assets/blog_listing.jpg">
                                </div>
                                <div class="home-right-info">
                                    <a href="#">图解 React Virtual DOM</a>
                                    <a href="#">作者： 阿希 （沪江 Web 前端开发工程师）本文原创，转载请注明作者及出处。 了解 React 的人几乎都听过说 Virtual DOM，甚至不了解 React 的人也听过 Virtual DOM。那么 React 的 Virtual DOM 到底长什么样子呢？今天我们将一探 R…</a>
                                </div>
                                <div class="home-right-job">
                                    <ul>
                                        <li>
                                            <div class="glyphicon glyphicon-heart"></div>
                                            <span>12</span>
                                        </li>
                                        <li>
                                            <div class="glyphicon glyphicon-comment"></div>
                                            <span>20</span>
                                        </li>
                                    </ul>
                                    <div>
                                        <a href="#">阅读全文</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <nav aria-label="Page navigation">
                            <ul class="pagination">
                                <li>
                                    <a href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </a>
                                </li>
                                <li><a href="#">1</a></li>
                                <li><a href="#">2</a></li>
                                <li><a href="#">3</a></li>
                                <li><a href="#">4</a></li>
                                <li><a href="#">5</a></li>
                                <li>
                                    <a href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-md-3">
                        <div class="home-top">
                            <p>本周TOP6</p>
                            <ul>
                                <li class="home-top-list">
                                    <a href="#">JavaScript深入系列15篇正式完结！</a>
                                    <ul class="home-top-icon">
                                        <li>
                                            <div class="glyphicon glyphicon-heart"></div>
                                            <span>12</span>
                                        </li>
                                        <li>
                                            <div class="glyphicon glyphicon-comment"></div>
                                            <span>20</span>
                                        </li>
                                    </ul>
                                </li>
                                <li class="home-top-list">
                                    <a href="#">html5canvas: 教你实现知乎登录动态粒子背景</a>
                                    <ul class="home-top-icon">
                                        <li>
                                            <div class="glyphicon glyphicon-heart"></div>
                                            <span>12</span>
                                        </li>
                                        <li>
                                            <div class="glyphicon glyphicon-comment"></div>
                                            <span>20</span>
                                        </li>
                                    </ul>
                                </li>
                                <li class="home-top-list">
                                    <a href="#">JavaScript深入系列15篇正式完结！</a>
                                    <ul class="home-top-icon">
                                        <li>
                                            <div class="glyphicon glyphicon-heart"></div>
                                            <span>12</span>
                                        </li>
                                        <li>
                                            <div class="glyphicon glyphicon-comment"></div>
                                            <span>20</span>
                                        </li>
                                    </ul>
                                </li>
                                <li class="home-top-list">
                                    <a href="#">html5canvas: 教你实现知乎登录动态粒子背景</a>
                                    <ul class="home-top-icon">
                                        <li>
                                            <div class="glyphicon glyphicon-heart"></div>
                                            <span>12</span>
                                        </li>
                                        <li>
                                            <div class="glyphicon glyphicon-comment"></div>
                                            <span>20</span>
                                        </li>
                                    </ul>
                                </li>
                                <li class="home-top-list">
                                    <a href="#">JavaScript深入系列15篇正式完结！</a>
                                    <ul class="home-top-icon">
                                        <li>
                                            <div class="glyphicon glyphicon-heart"></div>
                                            <span>12</span>
                                        </li>
                                        <li>
                                            <div class="glyphicon glyphicon-comment"></div>
                                            <span>20</span>
                                        </li>
                                    </ul>
                                </li>
                                <li class="home-top-list">
                                    <a href="#">html5canvas: 教你实现知乎登录动态粒子背景</a>
                                    <ul class="home-top-icon">
                                        <li>
                                            <div class="glyphicon glyphicon-heart"></div>
                                            <span>12</span>
                                        </li>
                                        <li>
                                            <div class="glyphicon glyphicon-comment"></div>
                                            <span>20</span>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr/>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
	margin:0;
	padding: 0;
	list-style:none;
}
/*index*/
.home-nav li i{
	margin-right: 5px;
}

.home-nav{
	width: 100%;
	height: 100px;
	border-bottom: 3px solid #e26228;
}
.home-nav-ul{
	float: right;
	list-style:none;
	line-height: 100px;
	overflow: hidden;
}
.home-nav-ul li{
	float: left;
	margin-right: 5px;
	position: relative;
}
.home-nav-ul li a{
	color:#898989;
	padding: 10px 25px;
}
.home-nav-ul li a:hover{
	text-decoration: none;
	color:#e26228;
}
.home-nav-ul li:hover .home-s{
	display: inline-block;
}
.home-nav-ul li:hover .nav-a{
	color:#e26228;
}
.home-nav-ul .home-nav-actived{
	background-color: #e26228;
	border-radius: 23px;
	color:#fff !important;
}
.home-s{
	display: none;
	width: 0;
    height: 0;
    border-left: 14px solid transparent;
    border-right: 14px solid transparent;
    border-bottom: 14px solid #e26228;
    position: absolute;
    bottom: 0;
    left:40%;
}

.home-title{
	width: 100%;
	height: 80px;
}
.home-title h1{
	color:#e26228;
	line-height: 100px;
	font-size: 2.76923em;
  line-height: 1.5;
  text-transform: none;
	font-weight: 300;
	text-align: left;
	padding: 0;
}
.breadcrumb {
	border:1px solid #ccc;
	padding:10px 25px;
	margin-bottom: 0;
}
.breadcrumb li a{
	color:#e26228;
	text-decoration: none;
}

.home-content{
	padding-top: 30px;
}
.home-content-left-title{
	margin-top: 20px;
	color:#666;
	font-size: 16px;
	padding-bottom: 5px;
	border-bottom: 1px solid #ccc;
}
.home-content-left-title:hover{
	color:#e26228;
}
.home-left-list{
	display: flex;
	justify-content:space-between;
	padding-bottom: 5px;
	padding-top: 10px;
	border-bottom: 1px solid #dfdfdf;
}
.home-left-list .home-left-list-info{
	color:#898989;
	font-size: 14px;
}
.home-left-list .home-left-list-num{
	display: inline-block;
	width: 25px;
	height: 25px;
	line-height: 25px;
	background-color: #dfdfdf;
	text-align: center;
	color:#898989;
	font-size: 14px;
	border-radius: 3px;
}
.home-left-info-list{
	border-bottom:  1px solid #dfdfdf;
	margin-top: 20px;
}
.home-left-info-list p {
	white-space:nowrap;
	overflow:hidden;
	text-overflow:ellipsis;
}
.home-left-label{
	padding:5px 10px;
	border:0;
	border-radius: 5px;
	color:#898990;
	background-color: #f5f5f5;
	margin-right: 10px;
	margin-top:10px;
}
.home-left-label:hover{
	background-color: #e26228;
	color:#fff;
}

.home-right-list{
	list-style:none;
	overflow: hidden;
	margin-top: 30px;

}
.home-right-list li{
	margin-bottom: 15px;
	border-bottom: 1px solid #dfdfdf;
}
.home-right-list li .home-right-author{
	display: flex;
	// justify-content:space-between;
	flex-direction:row;
	margin-bottom: 20px;
}
.home-right-list .home-right-author .home-right-author-img{
	width:30px;
	height: 30px;
	border-radius: 50%;
	margin-right: 10px;
}
.home-right-info a{
	text-decoration: none;
	display: block;
}
.home-right-info a:first-of-type{
	color:#000;
	font-size: 25px;
}
.home-right-info a:first-of-type:hover{
	color:#e26228;
}
.home-right-info a:last-of-type{
	color:#8b8b8b
}
.home-right-job{
	display: flex;
	justify-content:space-between;
	margin-top: 20px;
}
.home-right-job ul{
	list-style:none;
	display: flex;
}
.home-right-job ul li{
	cursor: pointer;
	color:rgba(24,37,50,.3);
}
.home-right-job ul li:hover{
	color:#000;
}
.home-right-job ul li:first-of-type{
	border:1px solid #dfdfdf;
	padding: 3px 15px;
}
.home-right-job ul li:last-of-type{
	border:1px solid #dfdfdf;
	padding: 3px;
	border-left:0;
}
.home-right-job ul li div{
	margin-right:5px;
}
.home-center-title{
	display: flex;
	justify-content:space-between;
	border-bottom: 1px solid #dfdfdf;
	padding:10px 0;
}
.home-center-title ul{
	display: flex;
}
.home-center-title ul li{
	margin-left: 10px;
}
.home-top{
	margin-top: 30px;
}
.home-top p{
	padding: 10px;
	border-bottom: 1px solid #dfdfdf;
}
.home-top-icon{
	display: flex;
	margin-top: 10px;
}
.home-top-icon li{
	margin-right: 10px;
}
.home-top .home-top-list{
	margin-top: 10px;
	border-bottom: 1px solid #dfdfdf;
}
</style>
