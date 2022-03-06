<template>
  <div class="role">
    <el-card>
      <RoleTable :tableConfig="roleTableConfig" page-name="role" />
    </el-card>
  </div>
</template>

<script lang="ts">
import RoleTable from "@/components/page-table.vue"
import { roleTableConfig } from "@/views/Main/system/role/table-config"
import { ref, defineComponent } from "vue"
import { useStore } from "vuex"
export default defineComponent({
  components: {
    RoleTable,
  },
  setup() {
    const store = useStore()
    const pageName = "role"
    store.dispatch("systemModule/getListAction", {
      pageName,
      queryInfo: { offset: 0, size: 10 },
    })
    return {
      roleTableConfig,
    }
  },
})
</script>

<style scoped lang="less"></style>
