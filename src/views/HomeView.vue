<template>
  <div class="home">

    <!-- =======Intro====== -->
    <section id="intro">
      <div class="wrapper">
        <div class="intro-head">
            <span class="opacity_hide">Inquisitive</span>
            <span class="opacity_hide">creative</span>
            <span class="opacity_hide">explorer</span>
            <p class="intro-p">
              Explore a world of curiosity and exploration.
              Dive into captivating articles, stories, and inspiration.
            </p>
          </div>
        <img src="@/assets/img/scrolltext.svg" alt="Scroll Down" class="circle__text">
      </div>
    </section>

    <!-- ========About======= -->
    <section id="short-about">
      <div class="about-head">
        <div class="circle-photo"><img src="@/assets/img/farhan.webp" alt="Farhan"></div>
        <a href="#" class="btn-cir">More <br> About Me</a>
      </div>
      <div class="about-text">
        <p class="para">
          I'm Farhan, a student with a deep passion for exploration. Whether it's delving into the digital world or
          experimenting with digital design, I'm always on the lookout for new horizons. <br><br>
          This is my canvas, where I share my creative works, hobbies, and the exciting journey of discovery. Join me as
          we navigate the realms of innovation and imagination!
        </p>
      </div>
    </section>

    <!-- =========Projects======== -->
    <section id="projects">
      <h1 class="headline">Feel free to explore a couple of <span class="highlight ta_opacity">projects</span> I've had
        some fun
        working on.</h1>

      <div class="wrapper">
        <ProjectCard class="opacity_hide" v-for="(pro, i) in projects" :pro="pro" :key="pro.id" :index="i" />
      </div>
    </section>

  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue"

//Animations
//import { gsap } from "gsap";
//import { ScrollTrigger } from "gsap/ScrollTrigger";
//gsap.registerPlugin(ScrollTrigger);
// import SplitType from 'split-type'
//========

export default {
  props: ["projects"],
  components: {
    ProjectCard
  },
  mounted() {
    this.animate()

  },
  methods: {
    animate() {
      

    }
  }
}
</script>


 