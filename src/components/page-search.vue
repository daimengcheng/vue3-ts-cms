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
            <ElButton @click="handleReset">重置</ElButton>
            <ElButton type="primary" @click="handleSearch">
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
import { defineComponent, ref, PropType, computed } from "vue"
import CzFromSearch from "@/base-ui/form/Cz-form.vue"
import { IFormData, IForm } from "@/base-ui/form/types"
import { useRolePermission } from "@/hooks/useRolePermission"
export default defineComponent({
  components: {
    CzFromSearch,
  },
  props: {
    searchFormConfig: {
      type: Object as PropType<IForm>,
      default: () => ({}),
    },
  },
  emits: ["resetChange", "searchChange"],
  setup(props, { emit }) {
    let originFormData: IFormData = {}

    const formItems = props.searchFormConfig.formItems ?? []

    // 动态设置 表单绑定数据
    for (const item of formItems) {
      originFormData[item.field] = ""
    }

    const formData = ref<IFormData>({ ...originFormData })
    // 重置表单数据
    const handleReset = () => {
      for (const item of formItems) {
        formData.value[item.field] = originFormData[item.field]
      }
      emit("resetChange")
    }

    // 搜索按钮实现
    const handleSearch = () => {
      emit("searchChange", formData.value)
    }

    return {
      CzFromSearch,
      handleReset,
      handleSearch,
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
