<template>
  <div class="main">
    <el-container class="container">
      <el-aside width="210px" class="aside">
        <Menu></Menu>
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
      overflow-x: hidden;
      overflow-y: auto;
      line-height: 200px;
      text-align: left;
      cursor: pointer;
      background-color: #001529;
      transition: width 0.3s linear;
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      &::-webkit-scrollbar {
        display: none;
      }
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
