<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path">
      <span v-if="如果是最后一个选项"></span>
      <a v-else href="" @click.prevent="handleLink(item)">{{ item.path }}</a>
    </el-breadcrumb-item>

  </el-breadcrumb>
</template>

<script>
export default {
  name: "BreadCrumb",
  methods: {
    handleLink(item) {
      const {redirect, path} = item;
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      this.$router.push(this.pathCompile(path));
    }
  },
};
</script>

<style scoped>

</style>