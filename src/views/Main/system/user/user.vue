<template>
  <div class="user">
    <el-card>
      <Search />
      <UserTable />
    </el-card>
  </div>
</template>

<script lang="ts">
import Search from "@/components/search.vue"
import UserTable from "@/components/user-table.vue"
import { useStore } from "vuex"
import { defineComponent } from "vue"
export default defineComponent({
  components: {
    Search,
    UserTable,
  },
  setup() {
    const store = useStore()
    store.dispatch("systemModule/getUserListAction", {
      url: "/users/list",
      queryInfo: { offset: 0, size: 10 },
    })
    return {}
  },
})
</script>
<style scoped lang="less">
.el-card {
  .user-table {
    margin: 40px 0;
  }
}
</style>
