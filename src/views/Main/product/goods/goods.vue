<template>
  <div class="goods">
    <el-card>
      <goodsSearch
        :search-form-config="goodsSearchConfig"
        @resetChange="handleResetChange"
        @searchChange="handleSearchChange"
      ></goodsSearch>
      <goodsTable
        :table-config="goodsTableConfig"
        page-name="goods"
        ref="pageTableRef"
      >
        <template #image="scope">
          <el-image
            style="width: 60px; height: 60px"
            :src="scope.row.imgUrl"
            fit="cover"
            :preview-src-list="[scope.row.imgUrl]"
            lazy
            :z-index="9999"
          ></el-image>
        </template>
      </goodsTable>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import goodsSearch from "@/components/page-search.vue"
import goodsTable from "@/components/page-table.vue"
import { goodsTableConfig } from "./table-config"
import { goodsSearchConfig } from "./search-config"
import { usePageSearch } from "@/hooks/usePageSearch"

const { pageTableRef, handleResetChange, handleSearchChange } = usePageSearch()
</script>

<style scoped lang="less"></style>
