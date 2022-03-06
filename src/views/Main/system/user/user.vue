<template>
  <div class="user">
    <el-card>
      <UserSearch :search-form-config="searchFormConfig" />
      <UserTable :table-Config="userTableConfig" page-name="users" />
    </el-card>
  </div>
</template>

<script lang="ts">
import UserSearch from "@/components/page-search.vue"
import UserTable from "@/components/page-table.vue"
import { searchFormConfig } from "./search-config"
import { userTableConfig } from "./table-config"
import { defineComponent, ref } from "vue"
export default defineComponent({
  components: {
    UserSearch,
    UserTable,
  },
  setup() {
    return {
      searchFormConfig,
      userTableConfig,
    }
  },
})
</script>
<style scoped lang="less"></style>
