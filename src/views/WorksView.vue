<template>
    <section class="works">
      <div class="works__container">
        <h3 class="works--h3">Last <span class="works--accent">projects</span></h3>
        <div class="works__list">
          <div class="works__item" v-for="item in projects.commercialProjects" :key="item.id">
            <div class="works__item_picture">
              <img :src="require(`@/assets/ProjectImages/${item.image}.jpeg`)" :alt="item.name" class="works__item_picture--img">
              <div class="works__item_picture--overlay">
                <span class="works__item_picture--btn btn" @click="openModal(item)">See more</span>
              </div>
            </div>
            <div class="works__item_desc">{{item.name}}</div>
          </div>
        </div>
        <h3 class="works--h3">Projects <span class="works--accent">4 fun</span></h3>
        <div class="works__list">
          <div class="works__item" v-for="item in projects.funProjects" :key="item.id">
            <div class="works__item_picture">
              <img :src="require(`@/assets/ProjectImages/${item.image}.jpeg`)" :alt="item.name" class="works__item_picture--img">
              <div class="works__item_picture--overlay">
                <span class="works__item_picture--btn btn" @click="openModal(item)">See more</span>
              </div>
            </div>
            <div class="works__item_desc">{{item.name}}</div>
          </div>
        </div>
      </div>
    </section>

    <project-modal :sortObject="this.sortObject" :showingModal="this.showingModal" @closeModal="closeModal"/>
</template>

<script>
import project from "@/data/projects.json";


export default {
  data(){
    return{
      projects:project,
      sortObject:null,
      showingModal:false
    }
  },
  methods:{
    openModal(findItem){
      console.log(findItem)
      const findArr = [...this.projects.commercialProjects, ...this.projects.funProjects]
      findArr.find((item)=>{
      if(findItem.id == item.id){
        this.showingModal = !this.showingModal
         this.sortObject = item
      }
    })
    },
    closeModal(closeParam){
      this.showingModal = closeParam
    }
  }

}
</script>

<style lang="scss">
@import "@/styles/general";
@import "@/styles/variables";
@import "@/styles/ui/button";
@import "@/styles/works";

</style>