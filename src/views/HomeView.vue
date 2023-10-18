<template>
  <div class="home">
    <!-- =======Intro====== -->
    <section id="intro">
      <div class="wrapper">
        <div class="intro-head text_anim_up_clip">
          <span>Inquisitive,</span>
          <span>creative</span>
          <span>explorer</span>
          <p class="intro-p">
            Explore a world of curiosity and exploration.
            Dive into captivating articles, stories, and inspiration.
          </p>
        </div>
        <div class="blob"></div>
      </div>
    </section>

    <!-- ========About======= -->
    <section id="short-about">
      <div class="about-head">
        <img src="@/assets/img/farhan.webp" class="circle-photo" alt="Farhan">
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
      <h1 class="headline">Feel free to explore a couple of <span class="highlight">projects</span> I've had some fun
        working on.</h1>

      <div class="wrapper">
        <ProjectCard v-for="(pro, i) in projects" :pro="pro" :key="pro.id" :index="i" />
      </div>
    </section>

    <!-- ===========contact============ -->
    <ContactSection />

  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue"
import ContactSection from "@/components/ContactSection.vue"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from 'split-type'

export default {
  props: ["projects"],
  components: {
    ProjectCard,
    ContactSection
  },
  mounted() {
    this.animate()
  },
  methods: {
    animate() {
      let splitTypes = document.querySelectorAll(".text_anim_up_clip span");

      splitTypes.forEach((char) => {

        const text = new SplitType(char, { types: 'chars, words' })

        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: false,
            markers: false
          },
          delay:.05,
          stagger:.05,
          y:100
        })
      })

    }
  }
}
</script>


 