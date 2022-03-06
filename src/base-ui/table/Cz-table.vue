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
    <el-table :data="tableData" border style="width: 100%">
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
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.slotName" :row="scope.row">{{
              scope.row[item.prop]
            }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <el-pagination
        v-model:currentPage="currentPage4"
        v-model:page-size="pageSize4"
        :page-sizes="[100, 200, 300, 400]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
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
  },
  setup() {
    return {}
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
</style>
