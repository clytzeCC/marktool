<template>
<div>
<h1>亲爱的普通用户,您好!</h1>
<div id="app">
<el-container style="height: 500px; border: 1px solid #eee">

  <!-- 左侧的导航栏 -->
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"></template>
          <el-button type="text" size="mini" icon="el-icon-more">选择文本</el-button>
          <el-button type="text" size="mini" icon="el-icon-download">确认下载</el-button>
        </el-submenu>   
      <el-menu-item index="2" @click="godatabase" ><i class="el-icon-error"></i>所有数据集</el-menu-item>
      <el-menu-item index="3" @click="godownload"><i class="el-icon-success"></i>已下载数据集</el-menu-item>  
      
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-link @click="goUser" icon="el-icon-switch-button" circle>注销</el-link>
    </el-header>

    <!-- 路由出口 -->
    <router-view></router-view>   

  </el-container>
</el-container>
</div>
</div>
</template>

<script>

export default {
  name: 'U',
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
    goUser(){
      this.$router.push('/User');
    },
    godatabase(){
      this.$router.push('/U/database');
    },
    godownload(){
      this.$router.push('/U/download');
    },
  },

  
}
</script>

<style scoped>
    .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

