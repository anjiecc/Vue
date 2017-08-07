<template>
    <div id="edit">
        <div class="edit-widget-list" @drop="drop($event)" @dragover="dragover($event)">
            
        </div>
        <div class="edit-widget">
            <ul>
                <li draggable="true" @dragstart="drag($event)" @dragend="dragend($event)" >
                    按钮
                </li>
                <li draggable="true">
                    文本
                </li>
                <li draggable="true">
                    下拉
                </li>
                <li draggable="true">
                    树
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {
        
    },
    methods: {
      drag(event){
        //   console.log(e);
      },
      dragend(event){
          console.log('2');
          console.log(event);
      },
      dragover(event){
      event.preventDefault()
      },
      drop(event){
          console.log('1');
          console.log(event);
        event.preventDefault();
      }
    }
}
</script>
<style>
#edit {
    width: 100%;
    height: 100%;
}

#edit .edit-widget-list {
    display: inline-block;
    /* width: calc(100% - 270px); */
    width: 89%;
    height: 100%;
    border-right: 1px solid #000;
}

#edit .edit-widget {
    display: inline-block;
    width: 10%;
    height: 100%;
}
#edit .edit-widget ul{
    list-style:none;
}
#edit .edit-widget ul li{
    float: left;
    width: 50px;
    height: 50px;
    line-height: 40px;
    padding: 5px;
    margin:5px;
    border:1px solid rebeccapurple;
    text-align: center;
    cursor: pointer;
}
#edit .edit-widget ul li:hover{
    box-shadow: 0px 0px 4px 2px #f95961;
}
</style>


