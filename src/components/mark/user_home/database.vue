<template>
    <!-- 文件显示主体部分 -->
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="filename" label="文件名" width="850">
        </el-table-column>

        <el-table-column prop="todo" label="操作" >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">下载</el-button>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="state" label="状态" >
        </el-table-column> -->
      </el-table>
    </el-main>
</template>

<script>
export default {
    name:'database',
    mounted:function(){
      this.usershowdata();//需要触发的函数
    },
    data () {
        const item = {
            date: '2016-05-02',
            filename: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        };
        return {
        tableData: [],
        userfilepath :'cc',
        }
    },
    methods:{
    //  页面加载即显示数据集
    usershowdata()
        {
        const self = this;                      
            self.$axios.post('/api/user/usershowdata') //前端接口
            .then((response) => {
                console.log(response);
                console.log(response.data);
                //console.log(response.data[1].id);
                this.tableData = response.data;
                
            }).then((error) => {
                console.log(error);
            })
        },  
    },
}
</script>

<style>

</style>