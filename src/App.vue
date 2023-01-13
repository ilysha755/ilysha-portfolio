<template>
  <header-component/>
    <router-view v-slot="{ Component,route }">
      <transition name="page">
        <main class="main container" :key="route.name">
        <component :is="Component"  />
          </main>
      </transition>
    </router-view>
  <footer-component/>
</template>
<style lang="scss">
@import "@/styles/general";
@import "@/styles/variables";

</style>
