<template>
  <div class="cz-table">
    <el-table :data="tableData" border style="width: 100%">
      <!-- 选择框 -->
      <el-table-column
        v-if="showColumnIndex"
        type="selection"
      ></el-table-column>
      <template v-for="item in propsItem" :key="item.prop">
        <el-table-column :prop="item.prop" :label="item.label" align="center">
          <template v-if="item.prop === 'enable'" #default="scope">
            <slot name="status" :row="scope.row"></slot>
          </template>
          <template v-else-if="item.prop === 'createAt'" #default="scope">
            <slot :name="item.prop" :row="scope.row"></slot>
          </template>
          <template v-else-if="item.prop === 'updateAt'" #default="scope">
            <slot :name="item.prop" :row="scope.row"></slot>
          </template>
        </el-table-column>
      </template>
      <!-- 按钮区 -->
      <el-table-column v-if="showColumnBtn" label="操作" align="center">
        <template #default="scope">
          <slot name="btn" :row="scope.row"></slot>
        </template>
      </el-table-column>
    </el-table>
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
    showColumnBtn: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    return {}
  },
})
</script>

<style scoped lang="less"></style>
