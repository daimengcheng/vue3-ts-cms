<template>
  <div class="menu">
    <el-card>
      <menuTable :table-config="menuTableConfig" page-name="menu" />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import menuTable from "@/components/page-table.vue"
import { menuTableConfig } from "@/views/Main/system/menu/table-config"
</script>

<style scoped lang="less"></style>
