<template>
  <div class="menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" class="img" alt="" />
      <span class="title">VUE3+TS</span>
    </div>
    <el-menu
      background-color="#001529"
      text-color="#ffffff"
      active-text-color="#e2db47"
      default-active="0"
      router
      unique-opened
    >
      <template v-for="(menu, index1) in menuList" :key="menu.id">
        <el-sub-menu v-if="menu.type === 1" :index="menu.url">
          <template #title>
            <i :class="menu.icon"></i>
            <span>{{ menu.name }}</span>
          </template>
          <el-menu-item
            v-for="(child, index2) in menu.children"
            :key="child.id"
            :index="child.url"
            >{{ child.name }}</el-menu-item
          >
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "vuex"
import { computed } from "vue"
const store = useStore()

const menuList = computed(() => store.state.loginModule.menuList)
console.log(menuList.value)
</script>

<style scoped lang="less">
.menu {
  background-color: #001529;
  height: 100%;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #0c2135 !important;
    }
    :deep(.el-sub-menu__title) {
      background-color: #001529 !important;
    }
    .el-menu-item:hover {
      color: #fff !important; // 菜单
    }
    .el-menu-item.is-active {
      color: #fff !important;
      background-color: #0a60bd !important;
    }
  }
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
