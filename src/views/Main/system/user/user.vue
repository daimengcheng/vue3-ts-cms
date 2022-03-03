<template>
  <div class="user">
    <el-card>
      <CzFromSearch :labelWidth="labelWidth" :formItems="formItems" />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import CzFromSearch from "@/base-ui/form/Cz-form.vue"
import { ref } from "vue"

const formItems = [
  { label: "账号", type: "input" },
  { label: "密码", type: "password" },
  {
    label: "请选择喜欢的运动",
    type: "select",
    selectOptions: [
      {
        value: "Option1",
        label: "Option1",
      },
      {
        value: "Option2",
        label: "Option2",
      },
      {
        value: "Option3",
        label: "Option3",
      },
      {
        value: "Option4",
        label: "Option4",
      },
      {
        value: "Option5",
        label: "Option5",
      },
    ],
  },
  { label: "请选择日期范围", type: "datePicker" },
]
const labelWidth = ref<string>("120px")

const colLayout = {}
</script>

<style scoped lang="less"></style>
