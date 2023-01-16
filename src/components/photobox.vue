<template>
  <div class="photobox">
    <img :src="require(`@/assets/myImages/${$route.meta.imgName}.png`)" :alt="`${this.imgName}`" class="photobox__img">
    <span class="photobox__round"></span>
    <span class="photobox__round--animate"></span>
  </div>
</template>
<script>
export default {
  name: "photoBox",
}
</script>

<style lang="scss">
@import "@/styles/general";
@import "@/styles/variables";
@import "@/styles/photobox";
</style>