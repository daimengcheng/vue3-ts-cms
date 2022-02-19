<template>
  <div>
    <router-link to="/home">首页</router-link>
    <router-link to="/login">登录</router-link>
    <span>{{ $store.state.name }}</span>
    <router-view></router-view>
    <el-button type="primary">登录</el-button>
    <el-button type="danger">delete</el-button>
  </div>
</template>

<script setup lang="ts"></script>

<style></style>
