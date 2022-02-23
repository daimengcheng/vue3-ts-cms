<template>
  <div class="login">
    <div class="title">
      <h1>后台管理系统</h1>
    </div>
    <LoginPanel />
  </div>
</template>

<script lang="ts" setup>
import LoginPanel from "./components/login-panel.vue"
</script>

<style scoped lang="less">
.login {
  width: 320px;
  display: flex;
  flex-direction: column;
  margin: 100px auto;
  .title {
    text-align: center;
  }
}
</style>
