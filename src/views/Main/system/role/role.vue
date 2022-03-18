<template>
  <div class="role">
    <el-card>
      <RoleSearch
        :search-form-config="roleSearchConfig"
        @reset-change="handleResetChange"
        @search-change="handleSearchChange"
      />
      <RoleTable
        :tableConfig="roleTableConfig"
        page-name="role"
        @click-edit-btn="handleEdit"
        @click-create-btn="handleCreate"
        btn-name="添加角色"
        ref="pageTableRef"
      />
      <RoleModal
        :defaultInfo="defaultInfo"
        ref="pageModalRef"
        :modal-config="roleModelConfig"
        page-name="users"
        :other-info="otherInfo"
      >
        <el-tree
          ref="treeRef"
          :data="treeData"
          :props="defaultProps"
          @check="handleCheckClick"
          show-checkbox
          node-key="id"
        />
      </RoleModal>
    </el-card>
  </div>
</template>

<script lang="ts">
import RoleTable from "@/components/page-table.vue"
import RoleSearch from "@/components/page-search.vue"
import RoleModal from "@/components/page-modal.vue"
import { roleTableConfig } from "./table-config"
import { roleSearchConfig } from "./search-config"
import { usePageModal } from "@/hooks/usePageModal"
import { usePageSearch } from "@/hooks/usePageSearch"
import { roleModelConfig } from "./modal-config"
import { ref, defineComponent, computed, nextTick } from "vue"
import { useStore } from "vuex"
import { ElTree } from "element-plus"
import { mapMenuToLeafId } from "@/utils/mapMenuPermission"

export default defineComponent({
  components: {
    RoleTable,
    RoleSearch,
    RoleModal,
  },
  setup() {
    const store = useStore()

    // 设置treeref
    const treeRef = ref<InstanceType<typeof ElTree>>()

    const leafID = ref<number[]>([])

    // el-tree的配置文件
    const defaultProps = {
      label: "name",
      children: "children",
    }

    // 树形列表数据
    const treeData = computed(() => {
      return store.state.menuList
    })

    // 获取完整的菜单列表
    store.dispatch("getMenuListAction")

    // 编辑按钮的回调
    const editCallback = (item: any) => {
      nextTick(() => {
        // 获取角色拥有的菜单的id
        leafID.value = mapMenuToLeafId(item.menuList)
        // 激活已拥有的菜单
        treeRef.value?.setCheckedKeys(leafID.value, true)
      })
    }

    // 添加角色需要的额外参数
    const otherInfo = ref()

    //
    const handleCheckClick = (data1: any, data2: any) => {
      const { checkedKeys, halfCheckedKeys } = data2
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      otherInfo.value = { menuList }
    }

    const { pageModalRef, defaultInfo, handleCreate, handleEdit } =
      usePageModal(undefined, editCallback)

    const { pageTableRef, handleResetChange, handleSearchChange } =
      usePageSearch()

    return {
      roleTableConfig,
      roleSearchConfig,
      treeData,
      defaultProps,
      handleCheckClick,
      pageModalRef,
      handleCreate,
      handleEdit,
      defaultInfo,
      roleModelConfig,
      treeRef,
      leafID,
      otherInfo,
      pageTableRef,
      handleResetChange,
      handleSearchChange,
    }
  },
})
</script>

<style scoped lang="less"></style>
