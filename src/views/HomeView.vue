<template>
  <div class="home">

    <!-- =======Intro====== -->
    <section id="intro">
      <div class="wrapper">
        <div class="intro-head">
          <span class="ta_up_clip text_up">Inquisitive</span>
          <span class="ta_up_clip text_up">creative</span>
          <span class="ta_up_clip text_up">explorer</span>
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
        <ProjectCard class="fade_up" v-for="(pro, i) in projects" :pro="pro" :key="pro.id" :index="i" />
      </div>
    </section>

  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue"

//Animations
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from 'split-type'
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
      const fadeUp = document.querySelectorAll(".fade_up")
            fadeUp.forEach((el) => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        // markers: true
                    },
                    opacity: 0,
                    y: 50,
                    duration: .6,
                    stagger: 3,
                    delay: .2
                })
            });

       // ======
       const textUp = document.querySelectorAll(".text_up")
            textUp.forEach((char) => {
                const text = new SplitType(char, { types: 'chars, words' })

                gsap.from(text.chars, {
                    scrollTrigger: {
                        trigger: char,
                        start: "top 90%"
                    },
                    y: 100,
                    duration: 1,
                    stagger: .02,
                    delay: .2,
                    ease:'expo.out'
                })
            })
       // ======
       const textOpacity = document.querySelectorAll(".text_opacity")
       textOpacity.forEach((char) => {
                const text = new SplitType(char, { types: 'chars, words' })

                gsap.from(text.chars, {
                    scrollTrigger: {
                        trigger: char,
                        start: "top 90%"
                    },
                    opacity:.2,
                    duration: 1,
                    stagger: .01,
                    delay: .2,
                    ease:'expo.out'
                })
            })


    }
  }
}
</script>


 