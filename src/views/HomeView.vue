<template>
  <div class="home">

    <!-- =======Intro====== -->
    <section id="intro">
      <div class="wrapper">
        <div class="intro-head">
            <span class="text_up">Inquisitive</span>
            <span class="text_up">creative</span>
            <span class="text_up">explorer</span>
            <p class="intro-p fade_simple">
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
        <div class="circle-photo fade_simple"><img src="@/assets/img/farhan.webp" alt="Farhan"></div>
        <a href="#" class="btn-cir">More <br> About Me</a>
      </div>
      <div class="about-text fade_fast">
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
      const fadeSimple = document.querySelectorAll('.fade_simple')
      fadeSimple.forEach(el=>{
        gsap.fromTo(el,{
          opacity:0,
          x:-20
        },
        {
          scrollTrigger:{
            trigger:el,
            start:'top, 95%'
          },
          x:0,
          opacity:1,
          delay:.2,
          duration:1,
          ease:'expo.out'
        })
      })
      const textUp = document.querySelectorAll('.text_up') //1
      textUp.forEach(word => {
        const text = new SplitType(word, { types: 'chars, words' })

        gsap.fromTo(text.chars, {
          y:'100px'
        },
          {
            scrollTrigger: {
              trigger: word,
              start: 'top 95%'
            },
            y:0,
            stagger: .02,
            delay: .3,
            ease:'expo.out',
            duration:2
          })
      })
      const fade = document.querySelectorAll('.fade') //2
      fade.forEach(word => {
        const text = new SplitType(word, { types: 'words' })

        gsap.fromTo(text.words, {
          opacity: 0
        },
          {
            scrollTrigger: {
              trigger: word,
              start: 'top 95%'
            },
            opacity: 1,
            stagger: .1,
            delay: .2
          })
      })
      const fadeFast = document.querySelectorAll('.fade_fast') //3
      fadeFast.forEach(word => {
        const text = new SplitType(word, { types: 'words' })

        gsap.fromTo(text.words, {
          opacity: 0
        },
          {
            scrollTrigger: {
              trigger: word,
              start: 'top 95%'
            },
            opacity: 1,
            stagger: .03,
            delay: .2
          })
      })
      const fadeLeft = document.querySelectorAll('.fade_left') //4

      fadeLeft.forEach(word=>{
        const text = new SplitType(word, {types: 'words'})

        gsap.fromTo(text.words,{
          opacity:0,
          x:-20
        },
        {
          scrollTrigger:{
            trigger:word,
            start:'top 95%'
          },
          opacity:1,
          x:0,
          stagger:.05,
          delay:.2
        })
      })
      ////
    }
  }
}
</script>


 