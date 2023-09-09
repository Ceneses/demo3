<template>
<div class="navbar">
<HamburgerComp @toggleClick.prevent=""></HamburgerComp>
</div>
</template>

<script>
import HamburgerComp from "@/components/Hambergur/HamburgerComp";

export default {
  name: "NavBar",
  components: {
    HamburgerComp,
  },
};
</script>

<style scoped>

</style>