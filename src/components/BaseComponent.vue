<template>
  <div>
  <el-col :span="12">
<!--    <h5>自定义颜色</h5>-->
    <el-menu
        mode="vertical"
        :router= "true"
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <el-menu-item index="/index">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/main">
        <i class="el-icon-menu"></i>
        <span slot="title">仪表盘</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  <router-view></router-view>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
