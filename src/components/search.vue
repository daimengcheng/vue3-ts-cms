<template>
  <div class="search">
    <el-card>
      <CzFromSearch v-bind="searchFormConfig" v-model="formData">
        <template #title>
          <div class="title">
            <h1>高级检索</h1>
          </div>
        </template>
        <template #btns>
          <div class="btns">
            <ElButton>重置</ElButton>
            <ElButton type="primary">
              <el-icon style="margin-right: 5px"><search /></el-icon>
              搜索
            </ElButton>
          </div>
        </template>
      </CzFromSearch>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import CzFromSearch from "@/base-ui/form/Cz-form.vue"
import { searchFormConfig } from "@/views/Main/system/user/search-config"
export default defineComponent({
  components: {
    CzFromSearch,
  },
  setup() {
    const formData = ref({
      name: "",
      password: "",
      selectValue: "",
      createTime: [],
    })
    return {
      CzFromSearch,
      searchFormConfig,
      formData,
    }
  },
})
</script>

<style scoped lang="less">
.btns {
  text-align: right;
}
</style>
