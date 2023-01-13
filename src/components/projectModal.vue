<template>
  <transition name="opacity">
<div class="modal"
     v-show="showingModal"
      v-if="sortObject"
        @click.self="closeModal">
  <div class="modal__container container">
    <div class="modal__image">
      <img :src="require(`@/assets/ProjectImages/${sortObject.image}.jpeg`)" :alt="sortObject.name" class="modal__image--img">
      <div class="modal__image_pill dev__pill" v-if="sortObject.development">In development</div>
    </div>
    <div class="modal__text">
    <div class="modal__text_title">{{sortObject.name}}</div>
      <div class="modal__text_desc">{{sortObject.desc}}</div>
      <div class="modal__text_pills">
        <div class="modal__text_techs">
        <div class="modal__text_tech modal__btn" v-for="item in sortObject.techs" :key="item.tech1">{{item}}</div>
        </div>
        <div class="modal__text_links">
          <a class="modal__text_link modal__btn"  v-if="sortObject.link" :href="sortObject.link" target="_blank">
            <svg class="modal__text_link--svg">
              <use xlink:href="icons.svg#world"></use>
            </svg>
            link
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
  </transition>
</template>
<script>
export default {
  name: "projectModal",
  props:{
    showingModal:{
      type:Boolean
    },
    sortObject:{
      type:Object
    }
  },
  methods:{
  closeModal(){
    this.$emit('closeModal', false)
  }
  }
}
</script>
<style lang="scss">
@import "@/styles/general";
@import "@/styles/variables";
@import "@/styles/modal";
</style>