<template>
  <div class="main">
    <el-container class="container">
      <el-aside width="200px" class="aside">
        <Menu />
      </el-aside>
      <el-container class="page">
        <el-header class="header">Header</el-header>
        <el-main class="el-main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import Menu from "./components/menu.vue"
</script>

<style scoped lang="less">
.main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  .container {
    // background-color: #ccc;
    height: 100%;
    .aside {
      height: 100%;
    }
    .header {
      background-color: #fff;
    }
    .el-main {
      background-color: #ccc;
    }
  }
}
</style>
