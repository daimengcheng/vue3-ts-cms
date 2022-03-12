<template>
  <div class="cz-table">
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <div class="handler">
          <slot name="headerHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
      :row-key="childrenProps.rowKey"
      :tree-props="childrenProps.treeProp"
    >
      <!-- 选择框 栏-->
      <el-table-column
        v-if="showColumnIndex"
        type="selection"
      ></el-table-column>
      <!-- index栏 -->
      <el-table-column
        v-if="showColumnSelect"
        type="index"
        align="center"
      ></el-table-column>
      <template v-for="item in propsItem" :key="item.prop">
        <el-table-column v-bind="item" align="center" show-overflow-tooltip>
          <template #default="scope">
            <slot :name="item.prop" :row="scope.row">{{
              scope.row[item.prop]
            }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer" v-if="!hidePagination">
      <el-pagination
        :current-page="pageInfo.currentPage"
        :page-sizes="[1, 2, 3, 10]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :default-page-size="pageInfo.pageSize"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export default defineComponent({
  props: {
    tableData: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    propsItem: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    showColumnIndex: {
      type: Boolean,
      default: false,
    },
    showColumnSelect: {
      type: Boolean,
      default: false,
    },
    totalCount: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: "",
    },
    pageInfo: {
      type: Object,
      default: () => ({}),
    },
    childrenProps: {
      type: null,
      default: () => ({}),
    },
    hidePagination: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["updatePageSize", "updatePageNum"],
  setup(props, { emit }) {
    // 当每页显式条目数发生改变时
    const handleSizeChange = (newPageSize: number) => {
      console.log(props.totalCount)
      emit("updatePageSize", newPageSize)
    }
    // 切换页数时的回调
    const handleCurrentChange = (newPageNum: number) => {
      emit("updatePageNum", newPageNum)
    }
    return {
      handleSizeChange,
      handleCurrentChange,
    }
  },
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  font-size: 22px;
}
.footer {
  display: flex;
  height: 100px;
  justify-content: center;
}
</style>
