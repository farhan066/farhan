<template>
  <div class="home">
    <!-- =======Intro====== -->
    <section id="intro">
      <div class="wrapper">
        <div class="intro-head ">
          <span class="ta_up_clip">Inquisitive,</span>
          <span class="ta_up_clip">creative</span>
          <span class="ta_up_clip">explorer</span>
          <p class="intro-p ta_line_up">
            Explore a world of curiosity and exploration.
            Dive into captivating articles, stories, and inspiration.
          </p>
        </div>
      </div>
    </section>

    <!-- ========About======= -->
    <section id="short-about">
      <div class="about-head">
        <img src="@/assets/img/farhan.webp" class="circle-photo" alt="Farhan">
        <a href="#" class="btn-cir">More <br> About Me</a>
      </div>
      <div class="about-text">
        <p class="para ta_opacity">
          I'm Farhan, a student with a deep passion for exploration. Whether it's delving into the digital world or
          experimenting with digital design, I'm always on the lookout for new horizons. <br><br>
          This is my canvas, where I share my creative works, hobbies, and the exciting journey of discovery. Join me as
          we navigate the realms of innovation and imagination!
        </p>
      </div>
    </section>

    <!-- =========Projects======== -->
    <section id="projects">
      <h1 class="headline">Feel free to explore a couple of <span class="highlight ta_opacity">projects</span> I've had some fun
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

//Animations
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import SplitType from 'split-type'
//========

export default {
  props: ["projects"],
  components: {
    ProjectCard,
    ContactSection
  },
  mounted() {
    this.animate()
    // ScrollTrigger.normalizeScroll(true); 
  },
  methods: {
    animate() {
      let splitTypes = document.querySelectorAll(".ta_up_clip");
      splitTypes.forEach((char) => {

        const text = new SplitType(char, { types: 'chars, words' })
        text.words.forEach((word)=>{
          word.classList.add('clipText')
        })
        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: 'top 90%',
            end: 'top 20%',
            scrub: false,
            markers: false
          },
          delay:.05,
          stagger:.05,
          y:100,
          // ease: 'power4'
        })
      })

      let splitTypes2 = document.querySelectorAll('.ta_opacity');

      splitTypes2.forEach((char) =>{
        const text = new SplitType(char, {types: 'chars, words'})

        gsap.from(text.chars,{
          scrollTrigger:{
            trigger: char,
            start:'top 70%',
            end: 'bottom 70%',
            scrub:true,
            markers:false
          },
          opacity:.2,
          stagger:.1
        })
      })

      let blurEl = document.querySelectorAll(".a_blur")

      blurEl.forEach((el) =>{
        gsap.from(el,{
          scrollTrigger:{
            trigger: el,
            start:'top 80%',
            end: 'top 20%',
            scrub:false,
            markers:false
          },
          filter: 'blur(5px)',
          duration:.3
        })
      })

      let splitTypes3 = document.querySelectorAll('.ta_line_up');
      splitTypes3.forEach((word) =>{
        const text = new SplitType(word,{types: 'words'})
        gsap.from(text.words,{
            scrollTrigger:{
              target: word,
              start:'top 100%',
              end:'top 100%',
              scrub:false,
              markers:false
            },
            opacity:.2,
            stagger: .1,
            delay:.4
          })
      })
    },


  }
}
</script>


 