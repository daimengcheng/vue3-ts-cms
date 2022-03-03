<template>
  <div class="cz-form-search">
    <el-form :label-width="labelWidth" label-position="left">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <template v-if="item.type === 'input'">
            <el-col :span="8" xs="4">
              <el-form-item label="账号" style="width: 400px">
                <el-input></el-input>
              </el-form-item>
            </el-col>
          </template>
          <template v-else-if="item.type === 'password'">
            <el-col :span="8">
              <el-form-item label="密码">
                <el-input show-password></el-input>
              </el-form-item>
            </el-col>
          </template>
          <template v-else-if="item.type === 'select'">
            <el-col :span="8">
              <el-form-item label="选择喜欢的运动" style="width: 400px">
                <el-select
                  v-model="selectValue"
                  class="m-2"
                  placeholder="Select"
                  size="large"
                  style="width: 330px"
                >
                  <el-option
                    v-for="option in item.selectOptions"
                    :key="option.value"
                    :label="option.label"
                    :value="option.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </template>
          <template v-else>
            <el-col :span="8">
              <el-form-item label="选择日期">
                <el-date-picker
                  v-model="dataValue"
                  type="daterange"
                  range-separator="To"
                  start-placeholder="Start date"
                  end-placeholder="End date"
                  style="width: 100%"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
          </template>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineProps, PropType, defineComponent, ref } from "vue"
import { IForm, FormItemOptions } from "@/base-ui/form/types"
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<FormItemOptions[]>,
      default: () => [],
    },
    labelWidth: {
      type: String,
      default: "120px",
    },
  },
  setup(props) {
    const selectValue = ref("")
    const dataValue = ref("")
    return {
      selectValue,
      dataValue,
    }
  },
})
</script>

<style scoped lang="less">
.el-col {
  margin-right: 5px;
  :deep(.el-form-item__content) {
    // width: 200px !important;
  }
}
</style>
