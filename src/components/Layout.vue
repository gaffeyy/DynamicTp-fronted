<template>
  <div>
    <el-container style="height: 400px; border: 1px solid #eee">
      <el-aside width="115px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-col :span="30">
            <el-menu
                :router="true"
                default-active="2"
                class="el-menu-vertical-demo"
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
              <el-menu-item index="/newDtp">
                <i class="el-icon-menu"></i>
                <span slot="title">新增Dtp</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-menu>
      </el-aside>

      <el-container>
        <router-view></router-view>
      </el-container>

    </el-container>


  </div>
</template>
<style>
.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {};
</script>