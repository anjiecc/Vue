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
        data(){
        	return {
                value:'',
                name:"md",
                author:document.cookie
        	}
        },
    	methods: {
			save(value){
                var _obj = {
                    id:new Date().getTime() + '',
                    name:this.name,
                    url:value,
                    size:value.length,
                    date:new Date(new Date().getTime()).toLocaleString(),
                    author:'chenanjie',
                    type:'md',
                    fileType:'md'
                }
                this.$http.post('/file/add',{data:_obj}).then(data => {
                   if(data.body && data.body.data){
                    this.$notify({
                        title: '成功',
                        message: '添加成功!',
                        type: 'success'
                    });
                   }
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