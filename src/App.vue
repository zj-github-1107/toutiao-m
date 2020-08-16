<template>
  <div id="app">
    <!-- 路由占位符，通过路由规则匹配到的组件将会被渲染到这个位置，所以这个标签很重要，一定不能丢掉 -->
    <router-view />
    <h1>黑马头条</h1>
  </div>
</template>

<script>
export default {
  // 给根组件取个名字
  name: 'App'
}
</script>

<style lang="less">
</style>
