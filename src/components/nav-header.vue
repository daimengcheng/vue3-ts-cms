<template>
  <div class="nav-header">
    <el-icon @click="handleFoldMenu" v-if="!isFold"><fold /></el-icon>
    <el-icon v-else @click="handleFoldMenu"><expand /></el-icon>
    <div class="title">
      <!-- 面包屑导航 -->
      <div class="bread">
        <CzBreadCrumb :breadcrumbData="breadcrumbData" />
      </div>
      <div class="user-info">
        <div class="avatar">
          <el-avatar
            size="small"
            src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
          ></el-avatar>
        </div>
        <div class="name">
          <el-dropdown>
            <span class="el-dropdown-link"> Dropdown List </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue"
import { useRouter, useRoute } from "vue-router"
import { useStore } from "vuex"
import CzBreadCrumb from "@/base-ui/breadcrumb/Cz-breadcrumb.vue"
import { routeMapBread } from "@/utils/map-route-menu"
export default defineComponent({
  components: {
    CzBreadCrumb,
  },
  emits: { "fold-menu": null },
  setup(props, { emit }) {
    //  是否要折叠
    const isFold = ref<boolean>(false)
    const handleFoldMenu = () => {
      isFold.value = !isFold.value
      emit("fold-menu", isFold.value)
    }
    const route = useRoute()
    const breadcrumbData = computed(() => {
      const store = useStore()
      const menuList = store.state.loginModule.menuList
      return routeMapBread(menuList, route.path)
    })
    return {
      handleFoldMenu,
      isFold,
      breadcrumbData,
    }
  },
})
</script>

<style scoped lang="less">
.nav-header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  .el-icon {
    font-size: 30px;
    margin-right: 10px;
  }
  .title {
    font-size: 20px;
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .user-info {
      font-size: 16px;
      display: flex;
      align-items: center;
      margin-right: 15px;
      .name {
        margin-left: 5px;
      }
    }
  }
}
</style>
