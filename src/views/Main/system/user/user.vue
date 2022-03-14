<template>
  <div class="user">
    <el-card>
      <UserSearch
        :search-form-config="searchFormConfig"
        @resetChange="handleResetChange"
        @searchChange="handleSearchChange"
        ref="pageSearchRef"
      />
      <UserTable
        :table-Config="userTableConfig"
        page-name="users"
        ref="pageTableRef"
        @click-create-btn="handleCreate"
        @click-edit-btn="handleEdit"
      />
    </el-card>
    <div class="modal">
      <userModal
        :defaultInfo="defaultInfo"
        ref="pageModalRef"
        :modal-config="newModalConfig"
      />
    </div>
  </div>
</template>

<script lang="ts">
import UserTable from "@/components/page-table.vue"
import { userTableConfig } from "./table-config"

import UserSearch from "@/components/page-search.vue"
import { searchFormConfig } from "./search-config"
import { usePageSearch } from "@/hooks/usePageSearch"

import userModal from "@/components/page-modal.vue"
import { usePageModal } from "@/hooks/usePageModal"
import { modalConfig } from "./modal-config"

import { computed, defineComponent, ref } from "vue"
import { useStore } from "vuex"
export default defineComponent({
  components: {
    UserSearch,
    UserTable,
    userModal,
  },
  setup() {
    const store = useStore()

    // 处理不同地方是否要显示密码栏
    const createCallback = () => {
      const passwordItem = modalConfig.formItems?.find(
        item => item.field === "password"
      )
      passwordItem!.isHidden = false
    }

    const editCallback = () => {
      const passwordItem = modalConfig.formItems?.find(
        item => item.field === "password"
      )
      passwordItem!.isHidden = true
    }

    store.dispatch("getDepartmentListAction")
    store.dispatch("getRoleListAction")

    const newModalConfig: any = computed(() => {
      const roleItem = modalConfig.formItems?.find(
        (item: any) => item.label === "角色"
      )
      const departmentItem = modalConfig.formItems?.find(
        (item: any) => item.label === "部门"
      )

      // 动态获取角色,和部门选择的数据
      store.state.departmentList.map((department: any) => {
        departmentItem!.selectOptions!.push({
          label: department.name,
          value: department.id,
        })
      })
      store.state.roleList.map((role: any) => {
        roleItem!.selectOptions!.push({
          label: role.name,
          value: role.id,
        })
      })
      console.log(roleItem!.selectOptions!)
      return modalConfig
    })

    const { pageTableRef, handleResetChange, handleSearchChange } =
      usePageSearch()

    const { pageModalRef, defaultInfo, handleCreate, handleEdit } =
      usePageModal(createCallback, editCallback)

    return {
      searchFormConfig,
      userTableConfig,
      pageTableRef,
      handleResetChange,
      handleSearchChange,
      pageModalRef,
      handleCreate,
      handleEdit,
      newModalConfig,
      defaultInfo,
    }
  },
})
</script>
<style scoped lang="less"></style>
