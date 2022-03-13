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
        :modal-config="modalConfig"
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

import { defineComponent, ref } from "vue"
export default defineComponent({
  components: {
    UserSearch,
    UserTable,
    userModal,
  },
  setup() {
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
      modalConfig,
      defaultInfo,
    }
  },
})
</script>
<style scoped lang="less"></style>
