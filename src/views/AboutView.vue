<template>
    <section class="about">
      <div class="about__container container">
        <photo-box/>
        <div class="about__text">
          <h1 class="about__text--h1">About <span class="about__text--accent">Me</span></h1>
          <p class="about__text--p">Hi! I am Ilya Rubtcov, Frontend developer. I create user interfaces. My main task is to create products for a million users. In my free time I travel or create a small car project :)</p>
          <a href="https://github.com/ilysha755/ilysha-portfolio/blob/main/src/assets/ilya755.pdf" target="_blank" class="about__text_cv btn">View CV</a>
        </div>
      </div>
    </section>
    <section class="timeline">
      <div class="timeline__container container">
        <div class="timeline__block">
          <h3 class="timeline__block--h3">Education</h3>
          <div class="timeline__list">
            <div class="timeline__item timeline__item--long" v-for="item in experience.education" :key="item.id">
              <div class="timeline__item_left">
                <div class="timeline__item_round">
                  <div class="timeline__item_round--small"></div>
                </div>
                <div class="timeline__item_time timeline__item_time--long">{{ item.year }}</div>
              </div>
              <div class="timeline__item_right timeline__item_right--long">
                {{ item.name }}
                <br>
                <span class="timeline__item_right--speciality">{{ item.speciality }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="timeline__block timeline__block--experience">
          <h3 class="timeline__block--h3">Experience</h3>
          <div class="timeline__list ">
            <div class="timeline__item" v-for="item in experience.work" :key="item.id">
              <div class="timeline__item_left">
                <div class="timeline__item_round">
                  <div class="timeline__item_round--small"></div>
                </div>
                <div class="timeline__item_time">{{ item.year }}</div>
              </div>
              <div class="timeline__item_right">
                {{ item.name }}
                <br>
                <span class="timeline__item_right--speciality">{{ item.speciality }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
    <section class="skills">
      <div class="skills__container container">
        <h3 class="skills__list--h3">Development <span class="skills__list--span">skills</span></h3>
        <div class="skills__list">
          <div class="skills__item" v-for="item in experience.skills" :key="item.id">
            <h3 class="skills__item--h3">{{item.name}}</h3>
            <div class="skills__item_bar">
              <span class="skills__item_bar--progress" :style="{width:item.progress}"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>
<script>
import experience from "@/data/experience.json";
export default {
  data() {
    return {
      experience: experience,

    }

  }

}
</script>
<style lang="scss">
@import "@/styles/general";
@import "@/styles/variables";
@import "@/styles/ui/button";
@import "@/styles/about";
@import "@/styles/timeline";
@import "@/styles/skills";

</style>