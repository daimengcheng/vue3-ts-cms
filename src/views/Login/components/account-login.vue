<template>
  <div class="account-login">
    <el-form
      label-width="60px"
      :rules="rules"
      :model="accountForm"
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountForm.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="accountForm.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, ref, defineComponent } from "vue"
import { ElForm } from "element-plus"
import rules from "../config/account-rules"
import accountCatch from "@/utils/catch"
export default defineComponent({
  setup() {
    // 用户输入的账号数据
    const accountForm = reactive({
      name: accountCatch.getCatch("name") || "",
      password: accountCatch.getCatch("password") || "",
    })

    // 获取表单组件对象
    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate(valid => {
        // 判断验证是否成功
        if (valid) {
          // 判断是否需要保存密码
          if (isKeepPassword) {
            accountCatch.setCatch("name", accountForm.name)
            accountCatch.setCatch("password", accountForm.password)
          }
        }
      })
    }
    // 验证规则
    return {
      accountForm,
      formRef,
      loginAction,
      rules,
    }
  },
})
</script>

<style scoped lang="less"></style>
