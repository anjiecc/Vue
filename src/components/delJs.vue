<template>
  <div class="deljs" id="deljs">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" sortable width="180">
      </el-table-column>
      <el-table-column prop="name" label="作者" width="180">
      </el-table-column>
      <el-table-column prop="mm" label="名称">
      </el-table-column>
      <el-table-column prop="info" label="描述信息">
      </el-table-column>
      <el-table-column prop="type" label="类型">
      </el-table-column>
      <el-table-column prop="size" label="大小">
      </el-table-column>
      <!-- <el-table-column prop="tag" label="标签" width="100" :filters="[{ text: 'Vue', value: 'Vue' }, { text: 'JavaScript', value: 'JavaScript' },{ text: 'NodeJs', value: 'NodeJs' }]" :filter-method="filterTag" filter-placement="bottom-end">
            <template scope="scope">
              <el-tag :type="scope.row.tag === '家' ? 'primary' : 'success'" close-transition>{{scope.row.tag}}</el-tag>
            </template>
          </el-table-column> -->
      <el-table-column label="操作">
        <template scope="scope">
          <el-button size="small" type="success" @click="pre(scope.$index, scope.row)">预览</el-button>
          <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="预览" :visible.sync="dialogTableVisible" size="full">
      <div id="pre"></div>
    </el-dialog>
  </div>
</template>
<script>
import marked from 'marked';

export default {
  data() {
    return {
      fileList: [],
      tableData: [],
      dialogTableVisible: false
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
      this.$http.get("/file/getFile?fileType=md").then(data => {
        if (data.body && data.body.msg) {
          // document.getElementById('delPhoto').innerHTML = marked(data.body.data.data[0].url);
          console.log(data.body.data);
          this.tableData = [];
          _.each(data.body.data.data, item => {
            this.tableData.push({
              id: item.id,
              date: item.date,
              name: item.author,
              mm: item.name,
              info: item.url.substring(0, 20),
              url: item.url,
              type: item.type,
              size: item.size,
              tag: 'Vue'
            })
          });

        }
      });

    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    handleDelete(index, row) {
      let _id = row.id;
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var url = row.type == 'md' ? `/file/delFile?id=${_id}&path=''` : `/file/delFile?id=${_id}&path=${row.url}`;
        this.$http.get(url).then(data => {
          if (data.body && data.body.msg) {
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this._init();
          }
        });

      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });



    },
    pre(index, row) {
      this.dialogTableVisible = true;
      if (row.type == 'md') {
        setTimeout(() => {
          document.getElementById('pre').innerHTML = marked(row.url);
        }, 1000)
      } else {
        var _url = `/file/readFile?path=${row.url}`;

        this.$http.get(_url).then(data => {
          document.getElementById('pre').innerHTML = marked(data.body);
        });
      }
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

.deljs .el-table th {
  text-align: center;
}
</style>
