<template>
  <div>
    <vuetyped :loop="true" :smart-backspace="true" :strings="['面试官你好', '我叫韩承毅', '来自天津']">
      <div class="typing"/>
    </vuetyped>
  </div>
</template>

<script>
export default {
  name: "SettingComponent.vue"
};
</script>

<style scoped>

</style>