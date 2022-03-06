<template>
  <div class="user-table">
    <CzTable :tableData="ListData" v-bind="tableConfig">
      <template #headerHandler>
        <el-button type="primary">添加用户</el-button>
      </template>
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
      <template #option="scope">
        <div class="btns">
          <el-button type="primary">编辑</el-button>
          <el-button type="danger">删除</el-button>
        </div>
      </template>
    </CzTable>
  </div>
</template>

<script lang="ts">
import CzTable from "@/base-ui/table/Cz-table.vue"
import { formatTime, formatStatus } from "@/utils/filters"
import { ITableConfig } from "@/base-ui/table/type"
import { defineComponent, computed, PropType, ref } from "vue"
import { useStore } from "vuex"
export default defineComponent({
  components: {
    CzTable,
  },
  props: {
    tableConfig: {
      type: Object as PropType<ITableConfig>,
      default: () => ({}),
    },
    pageName: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    const store = useStore()
    let ListData = ref<any>()
    let totalCount = ref<any>(0)
    // 发起获取列表的请求
    store.dispatch("systemModule/getListAction", {
      pageName: props.pageName,
      queryInfo: { offset: 0, size: 10 },
    })
    // 通过pageName获取获取数据
    switch (props.pageName) {
      case "users":
        ListData = computed(() => store.state.systemModule.userList)
        totalCount = computed(() => store.state.systemModule.userCount)
        break
      case "role":
        ListData = computed(() => store.state.systemModule.roleList)
        totalCount = computed(() => store.state.systemModule.roleCount)
        break
    }
    return {
      ListData,
      totalCount,
      formatTime,
      formatStatus,
    }
  },
})
</script>

<style scoped lang="less"></style>
