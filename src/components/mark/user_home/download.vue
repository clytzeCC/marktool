<template>
<!-- 文件下载了的部分 -->
    <el-main>
      <el-table :data="tableData">
        <el-table-column prop="filename" label="文件名" width="850">
        </el-table-column>

        <el-table-column prop="todo" label="操作" >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
        <!-- <el-table-column prop="state" label="状态" >
        </el-table-column> -->
      </el-table>
    </el-main>
</template>

<script>
export default {
    name:'download',
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
    //  打开对应的行的文本文件进行编辑
    handleClick(row) {
      const self = this;                      
      console.log(row.filename);
      this.userfilepath = row.filepath;
      let userfilepath = this.userfilepath;
      //this.userfilepath = row.filepath;
      localStorage.setItem('name_usermark',row.filename);
      localStorage.setItem('path_usermark',row.filepath);
      var data = {'userpath': userfilepath}
      console.log(data)
        this.$axios.post('/api/content/abc', data).then((response)=>{
            console.log(response.data);
            localStorage.setItem('userfilecontent',response.data);
            this.$router.push('/UserMark');
        }).then((error) => {
            console.log(error);
        })
      },
    },
}
</script>

<style>

</style>