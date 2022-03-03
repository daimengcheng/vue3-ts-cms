<template>
  <div class="menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" class="img" alt="" />
      <span v-if="!collapse" class="title">VUE3+TS</span>
    </div>
    <el-menu
      unique-opened
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      :collapse="collapse"
      :default-active="activeMenu"
      router
    >
      <template v-for="menu in menuList" :key="menu.id">
        <el-sub-menu v-if="menu.type === 1" :index="menu.url">
          <template #title>
            <!-- <i :class="menu.icon"></i> -->
            <el-icon><monitor /></el-icon>
            <span>{{ menu.name }}</span>
          </template>
          <el-menu-item
            v-for="child in menu.children"
            :key="child.id"
            :index="child.url"
            class="el-menu-item"
            >{{ child.name }}</el-menu-item
          >
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex"
import { computed, defineComponent, watch, PropType } from "vue"
import localCache from "@/utils/cache"
export default defineComponent({
  props: {
    collapse: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
  },
  setup(props) {
    const store = useStore()
    const menuList = computed(() => store.state.loginModule.menuList)
    const activeMenu = localCache.getCache("activeMenu")
    return {
      menuList,
      activeMenu,
    }
  },
})
</script>

<style scoped lang="less">
.menu {
  background-color: #001529;
  // background-color: red;
  height: 100%;
  border: none !important;
  // color: rgb(183 189 195);
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
  .el-menu {
    border-right: none;
    .el-sub-menu {
      // text-align: center;
      // 二级菜单 ( 默认背景 )
      .el-menu-item {
        padding-left: 50px !important;
        background-color: #0c2135 !important;
      }
      :deep(.el-sub-menu__title) {
        background-color: #001529 !important;
        padding-left: 20px !important;
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
  .el-icon {
    // background-color: red !important;
  }
}
</style>
