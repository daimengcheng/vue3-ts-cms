<template>
  <div class="cz-breadcrumb">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item
        v-for="breadcrumb in breadcrumbData"
        :key="breadcrumb.path"
        >{{ breadcrumb.name }}</el-breadcrumb-item
      >
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { ArrowRight } from "@element-plus/icons-vue"
import { defineComponent, PropType } from "vue"
import { IBreadcrumbData } from "./types"
export default defineComponent({
  props: {
    breadcrumbData: {
      type: Array as PropType<IBreadcrumbData[]>,
      default: () => [],
    },
  },
  setup(props) {
    return {
      ArrowRight,
    }
  },
})
</script>

<style scoped lang="less"></style>
