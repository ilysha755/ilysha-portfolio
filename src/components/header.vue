<template>
  <header :class="this.headerStyle">
    <div class="header__wrap container">
      <div class="header__name">
        Ilya
        <br>
        <span class="header__name--accent">Rubcov</span>
      </div>
      <nav class="header__nav">
        <ul class="header__nav--ul"> 
          <li class="header__nav_item"><router-link class="header__nav_item--link" to="/">Home</router-link></li>
          <li class="header__nav_item"><router-link class="header__nav_item--link" to="/about">About</router-link></li>
          <li class="header__nav_item"><router-link class="header__nav_item--link" to="/works">Wokrs</router-link></li>
        </ul>
      </nav>
      <span :class="this.burgerClass" @click="toggleMobileHeader"></span>
      <transition name="opacity">
      <nav class="mobile__nav" @click.self="toggleMobileHeader" v-show="this.mobileMenuOpen">
        <ul class="mobile__nav_list">
          <li class="header__nav_item header__nav_item--mobile"><router-link class="header__nav_item--link" @click="toggleMobileHeader" to="/">Home</router-link></li>
          <li class="header__nav_item header__nav_item--mobile"><router-link class="header__nav_item--link" @click="toggleMobileHeader" to="/about">About</router-link></li>
          <li class="header__nav_item header__nav_item--mobile"><router-link class="header__nav_item--link" @click="toggleMobileHeader" to="/works">Wokrs</router-link></li>
        </ul>
      </nav>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  name: "headerComponent",
  data(){
    return{
      headerStyle:"header",
      mobileMenuOpen:false,
      burgerClass:"header__burger"

    }
  },
  methods:{
    addHeaderStyle(){
      window.location.pathname !== "/" && window.scrollY>= 50
          ?
          this.headerStyle = "header header--black"
          :
          this.headerStyle = "header "

    },
    toggleMobileHeader(){
      this.mobileMenuOpen = !this.mobileMenuOpen
      this.mobileMenuOpen == true
          ?
          this.burgerClass = "header__burger header__burger--open"
          :
          this.burgerClass = "header__burger"
    }
  },
  created() {
  window.addEventListener("scroll", this.addHeaderStyle)
  }

}
</script>

<style lang="scss">
@import "@/styles/general";
@import "@/styles/variables";
@import "@/styles/header";

</style>