<template>
  <div class="login-panel">
    <el-tabs type="border-card" class="demo-tabs" stretch v-model="activeName">
      <!-- 账号登录面板 -->
      <el-tab-pane name="account">
        <template #label>
          <span> 账号登录</span>
        </template>
        <AccountLogin ref="accountRef" />
      </el-tab-pane>
      <!-- 手机号登录面板 -->
      <el-tab-pane name="phone">
        <template #label>
          <span> 手机号登录</span>
        </template>
        <PhoneLogin ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>
    <!-- 记住密码和忘记密码 -->
    <div class="check">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <!-- 登录按钮 -->
    <div class="login" @click="handleLogin">
      <el-button type="primary" style="width: 100%">登录</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import AccountLogin from "./account-login.vue"
import PhoneLogin from "./phone-login.vue"
import { ref } from "vue"
const accountRef = ref<InstanceType<typeof AccountLogin>>()
const phoneRef = ref<InstanceType<typeof PhoneLogin>>()
// 是否保存密码
const isKeepPassword = ref(false)
// 标签选中项的name
const activeName = ref("account")
// 执行登录的逻辑
const handleLogin = () => {
  if (activeName.value === "account") {
    accountRef.value?.loginAction(isKeepPassword.value)
  } else {
    phoneRef.value?.handleLogin()
  }
}
</script>

<style scoped lang="less">
.login-panel {
  .check {
    display: flex;
    justify-content: space-between;
  }
}
</style>
