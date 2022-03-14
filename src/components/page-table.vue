<template>
  <div class="user-table">
    <CzTable
      :tableData="listData"
      v-bind="tableConfig"
      :totalCount="totalCount"
      @updatePageNum="handlePageNumChange"
      @updatePageSize="handlePageSizeChange"
      :pageInfo="pageInfo"
    >
      <template #headerHandler>
        <el-button type="primary" v-if="isCreated" @click="handleCreate"
          >添加用户</el-button
        >
      </template>
      <template #enable="scope">
        <el-button
          :type="scope.row.enable || scope.row.status ? 'success' : 'danger'"
          >{{ formatStatus(scope.row.enable) }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #option="scope">
        <div class="btns">
          <el-button
            type="primary"
            v-if="isUpdated"
            @click="handleEdit(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            v-if="isDeleted"
            @click="handleDelete(scope.row.id)"
            >删除</el-button
          >
        </div>
      </template>
      <template
        v-for="prop in otherPropItem"
        :key="prop.slotName"
        #[prop.prop!]="scope"
      >
        <slot :name="prop.prop" :row="scope.row"></slot>
      </template>
    </CzTable>
  </div>
</template>

<script lang="ts">
import CzTable from "@/base-ui/table/Cz-table.vue"

import { formatTime, formatStatus } from "@/utils/filters"

import { ITableConfig } from "@/base-ui/table/type"

import { useRolePermission } from "@/hooks/useRolePermission"

import { defineComponent, computed, PropType, ref, watch } from "vue"

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
  emits: ["clickEditBtn", "clickCreateBtn"],
  setup(props, { emit }) {
    const store = useStore()
    let listData = ref<any>()
    let totalCount = ref<any>(0)

    // 设置pageInfo
    const pageInfo = ref({
      pageSize: 10,
      currentPage: 1,
    })

    const isDeleted = ref()
    const isCreated = ref()
    const isUpdated = ref()
    const isQuery = ref()
    // 权限判断
    watch(
      () => props.pageName,
      () => {
        isDeleted.value = useRolePermission(props.pageName, "delete")
        isCreated.value = useRolePermission(props.pageName, "create")
        isUpdated.value = useRolePermission(props.pageName, "update")
        isQuery.value = useRolePermission(props.pageName, "query")
      },
      { immediate: true }
    )

    // 监听pageInfo,当pageInfo发生改变时,重新发起请求
    watch(pageInfo, () => getDataList(), { deep: true })
    // 发起获取列表的请求
    const getDataList = (otherQuery: any = {}) => {
      // 如果isQuery为否,说明该角色没有查询的权限
      if (!isQuery) return
      store.dispatch("systemModule/getListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...otherQuery,
        },
      })
    }
    getDataList()
    // 通过pageName获取获取数据
    switch (props.pageName) {
      case "users":
        listData = computed(() => store.state.systemModule.userList)
        totalCount = computed(() => store.state.systemModule.userCount)
        break
      case "role":
        listData = computed(() => store.state.systemModule.roleList)
        totalCount = computed(() => store.state.systemModule.roleCount)
        break
      case "goods":
        listData = computed(() => store.state.systemModule.goodsList)
        totalCount = computed(() => store.state.systemModule.goodsCount)
        break
      case "menu":
        listData = computed(() => store.state.systemModule.menuList)
        totalCount = computed(() => store.state.systemModule.menuCount)
    }
    //  filter 创建一个新的数组, 其包含通过所提供函数实现的测试的所有元素
    const otherPropItem = props.tableConfig.propsItem.filter(item => {
      if (item.slotName) {
        if (item.slotName === "createAt") return false
        else if (item.slotName === "updateAt") return false
        else if (item.slotName === "option") return false
        else if (item.slotName === "status") return false
        return true
      }
    })

    // 当页码改变时
    const handlePageNumChange = (newPageNum: number) => {
      pageInfo.value.currentPage = newPageNum
    }

    // 当每页显示条目数改变时
    const handlePageSizeChange = (newPageSize: number) => {
      pageInfo.value.pageSize = newPageSize
    }

    // 点击删除按钮
    const handleDelete = (id: number) => {
      ElMessageBox.confirm("你确定要删除吗?", "Warning", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          store.dispatch("systemModule/deleteByIdAction", {
            pageName: props.pageName,
            id: id,
            queryInfo: {
              offset:
                (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
              size: pageInfo.value.pageSize,
            },
          })
          ElMessage({
            type: "success",
            message: "删除成功",
          })
        })
        .catch(() => {
          ElMessage({
            type: "info",
            message: "删除失败",
          })
        })
    }

    // 点击新增按钮
    const handleCreate = () => {
      emit("clickCreateBtn")
    }

    // 点击编辑按钮
    const handleEdit = (item: any) => {
      emit("clickEditBtn", item)
    }

    return {
      listData,
      totalCount,
      formatTime,
      formatStatus,
      handlePageNumChange,
      handlePageSizeChange,
      pageInfo,
      getDataList,
      otherPropItem,
      isCreated,
      isDeleted,
      isUpdated,
      handleDelete,
      handleEdit,
      handleCreate,
    }
  },
})
</script>

<style scoped lang="less"></style>
