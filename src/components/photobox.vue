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
  data(){
    return{
    imgName: null
    }
  }
  // ,
  // mounted() {
  //   let location = window.location.pathname
  // switch (location){
  //   case "/":
  //     this.imgName = "mainImage"
  //     break;
  //   case "/about":
  //     this.imgName = "aboutImage"
  //     break;
  //   default:
  //   this.imgName = "notFound"

  // }
  // }
}
</script>

<style lang="scss">
@import "@/styles/general";
@import "@/styles/variables";
@import "@/styles/photobox";
</style>