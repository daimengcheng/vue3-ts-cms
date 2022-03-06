<template>
  <div class="user-table">
    <CzTable :tableData="userList" v-bind="userTableConfig">
      <template #status="scope">
        <el-button :type="scope.row.enable ? 'success' : 'danger'">{{
          formatStatus(scope.row.enable)
        }}</el-button>
      </template>
      <template #createAt="scope">
        <span>{{ formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #btn="scope">
        <div class="btns">
          <el-button type="primary">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </div>
      </template>
    </CzTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "vuex"
import CzTable from "@/base-ui/table/Cz-table.vue"
import { formatTime, formatStatus } from "@/utils/filters"
import { userTableConfig } from "@/views/Main/system/user/table-config"
export default defineComponent({
  components: {
    CzTable,
  },
  setup() {
    const userList = computed(() => {
      const store = useStore()
      const userList = store.state.systemModule.userList
      userList.forEach((user: any) => {
        console.log(user)
      })
      return userList
    })
    return {
      userList,
      formatTime,
      formatStatus,
      userTableConfig,
    }
  },
})
</script>

<style scoped lang="less"></style>
