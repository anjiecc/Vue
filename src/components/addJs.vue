   <template>
    <div id="editor">
        <mavon-editor style="height: 100%" :ishljs="true" @save="save(value)" v-model="value"></mavon-editor>
    </div>
</template>
    <script>
// Local Registration
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    name: 'editor',
    components: {
        mavonEditor
    },
    data() {
        return {
            value: '',
            name: "",
            author: document.cookie
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            this.$http.get("/file/getFile?fileType=md").then(data => {
                if (data.body && data.body.msg && data.body.data.data && data.body.data.data.length) {
                    //add by chenanjie 2017.8.5 获取当前时间，回填最后一次保存的数据
                    var currentDate = new Date().getTime();
                    var compareArray = [];
                    _.each(data.body.data.data, (item, i) => {
                        var saveDate = +item.id.split("'")[1];
                        compareArray.push({
                            date: currentDate - saveDate,
                            index: i
                        });
                    });
                    //add by chenanjie 2017.8.5 获取最后一次保存的数据
                    var obj = _.min(compareArray, 'date');
                    var index = obj.index;
                    var queryData = data.body.data.data[index];
                    // add by chenanjie 2017.8.5 如果是直接保存文件字符串就是渲染反之请求文件流内容
                    if (queryData.type == 'md') {
                        this.value = data.body.data.data[index].url;
                    } else {
                        var _url = `/file/readFile?path=${queryData.url}`;
                        this.$http.get(_url).then(data => {
                            console.log(data);

                            this.value = data.body;
                        });
                    }
                }
            });
        },
        save(value) {
            var _obj = {
                id: new Date().getTime() + '',
                name: this.name,
                url: value,
                size: value.length,
                date: new Date(new Date().getTime()).toLocaleString(),
                author: 'chenanjie',
                type: 'md',
                fileType: 'md'
            }
            if (!this.name) {
                this.commit(_obj);
            }

        },
        commit(_obj) {
            this.$prompt('请输入名称', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
                inputPattern: /[a-zA-Z0-9_\u4e00-\u9fa5]{1,64}/,
                inputErrorMessage: '名称格式不正确'
            }).then(({ value }) => {
                _obj.name = this.name = value;
                this.$http.post('/file/add', { data: _obj }).then(data => {
                    if (data.body && data.body.data) {
                        this.$notify({
                            title: '成功',
                            message: '添加成功!',
                            type: 'success'
                        });
                        this.name = '';
                    }
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '取消输入'
                });
            });
        }
    }
}
</script>
    <style>
#editor {
    /*margin: auto;*/
    width: 100%;
    height: 100%;
}
</style>