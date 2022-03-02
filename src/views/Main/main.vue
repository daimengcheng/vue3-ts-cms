<template>
  <div class="main">
    <el-container class="container">
      <el-aside :width="isCollapse ? '60px' : '210px'" class="aside">
        <NavMenu :collapse="isCollapse"></NavMenu>
      </el-aside>
      <el-container class="page">
        <el-header class="header">
          <NavHeader @fold-menu="handleFold" />
        </el-header>
        <el-main class="el-main">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import NavMenu from "@/components/nav-menu.vue"
import NavHeader from "@/components/nav-header.vue"
import { ref, defineComponent } from "vue"
export default defineComponent({
  components: {
    NavMenu,
    NavHeader,
  },
  setup() {
    // 是否水平折叠菜单
    const isCollapse = ref<boolean>(false)
    const handleFold = value => {
      isCollapse.value = value
    }
    return {
      isCollapse,
      handleFold,
    }
  },
})
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
      height: 60px;
      width: 100%;
    }
    .el-main {
      background-color: #ccc;
    }
  }
}
</style>
