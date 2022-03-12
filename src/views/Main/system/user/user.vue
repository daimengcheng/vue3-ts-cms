<template>
  <div class="user">
    <el-card>
      <UserSearch
        :search-form-config="searchFormConfig"
        @resetChange="handleResetChange"
        @searchChange="handleSearchChange"
      />
      <UserTable
        :table-Config="userTableConfig"
        page-name="users"
        ref="pageTableRef"
      />
    </el-card>
  </div>
</template>

<script lang="ts">
import UserSearch from "@/components/page-search.vue"
import UserTable from "@/components/page-table.vue"
import { searchFormConfig } from "./search-config"
import { userTableConfig } from "./table-config"
import { usePageSearch } from "@/hooks/usePageSearch"
import { defineComponent } from "vue"
export default defineComponent({
  components: {
    UserSearch,
    UserTable,
  },
  setup() {
    const { pageTableRef, handleResetChange, handleSearchChange } =
      usePageSearch()
    return {
      searchFormConfig,
      userTableConfig,
      pageTableRef,
      handleResetChange,
      handleSearchChange,
    }
  },
})
</script>
<style scoped lang="less"></style>
