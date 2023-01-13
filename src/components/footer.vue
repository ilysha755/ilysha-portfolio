<template>
  <footer :class="$route.meta.footerStyle">
    <div class="footer__wrap container">
      <div class="footer__wrap_city">
        Frontend developer
        <br>
        from
        <span class="footer__wrap_city--accent">Moscow</span>
      </div>
      <div class="footer__wrap_social">
        <a :href="item.link" v-for="item in this.contacts" :key="item.icon" class="footer__wrap_social--link">
          <svg class="footer__wrap_social--svg">
            <use :xlink:href="`icons.svg#` + item.icon "></use>
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>
<script>

export default {
  name: "footerComponent",
  data(){
    return{
      contacts:[
        {icon:"github",link:"https://github.com/ilysha755"},
        {icon:"phone",link:"+79161597174"},
        {icon:"telegram",link:"https://t.me/ilysha755"},
        {icon:"e-mail",link:"ilyarubtcov755@gmail.com"}
      ]
    }
  },
}
</script>
<style lang="scss">
@import "@/styles/general";
@import "@/styles/variables";
@import "@/styles/footer";
</style>