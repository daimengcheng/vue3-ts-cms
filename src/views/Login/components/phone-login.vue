<template>
  <div class="phone-login">
    <el-form
      label-width="70px"
      :rules="phoneRules"
      :model="phoneForm"
      ref="formRef"
    >
      <el-form-item label="账号" prop="phone">
        <el-input v-model="phoneForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="password">
        <el-input
          v-model="phoneForm.password"
          type="password"
          style="width: 80px; margin-right: 20px"
        ></el-input>
        <el-button type="primary">获取验证码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, defineComponent, ref } from "vue"
import phoneRules from "../config/phone-rules"
import { ElForm } from "element-plus"
export default defineComponent({
  setup() {
    // 获取form组件对象
    const formRef = ref<InstanceType<typeof ElForm>>()
    // 输入的手机登录信息
    const phoneForm = reactive({
      phone: "",
      password: "",
    })

    // 登录逻辑
    const handleLogin = () => {
      formRef.value?.validate(valid => {
        if (valid) {
          console.log("正在执行手机登录的逻辑")
        }
      })
    }

    return {
      phoneForm,
      phoneRules,
      formRef,
      handleLogin,
    }
  },
})
</script>

<style scoped lang="less"></style>
