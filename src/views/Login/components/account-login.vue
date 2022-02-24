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
import accountCache from "@/utils/cache"
import { useStore } from "vuex"
export default defineComponent({
  setup() {
    // 用户输入的账号数据
    const accountForm = reactive({
      name: accountCache.getCache("name") || "",
      password: accountCache.getCache("password") || "",
    })
    const store = useStore()
    // 获取表单组件对象
    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate(async valid => {
        // 判断验证是否成功
        if (valid) {
          // 判断是否需要保存密码
          if (isKeepPassword) {
            accountCache.setCache("name", accountForm.name)
            accountCache.setCache("password", accountForm.password)
          }
          store.dispatch("loginModule/accountLoginAction", accountForm)
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
