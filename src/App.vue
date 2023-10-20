<template>
  <header>
    <div class="logo">
      <a href="/"><img src="./assets/img/logo.png" alt="Farhan Logo"></a>
    </div>
    <nav class="menu">
      <ul>
        <li><a href="#projects" class="btn-cap">Projects</a></li>
      </ul>
    </nav>
  </header>
  <div class="cursor" :style="cursorStyle"></div>
  <router-view 
  :projects="projects" 
  />
</template>

<script>
import list from "@/projects.json"
import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";
export default {
  data() {
    return {
      projects: list,
      cursorX: 0,
      cursorY: 0,
    }
  },
  computed: {
    cursorStyle() {
      return {
        top: this.cursorY + 'px',
        left: this.cursorX + 'px',
      };
    },
  },
  mounted() {
    window.addEventListener("mousemove", this.updateCursor)
    document.addEventListener("click", this.scaleCursor)
    // this.scrollSmooth()
    this.animate()
  },
  methods: {
    updateCursor(e) {
      this.cursorX = e.pageX;
      this.cursorY = e.pageY;
    },
    scaleCursor() {
      const cursor = document.querySelector('.cursor')
      cursor.classList.add("cursor__expand")
      setTimeout(() => {
        cursor.classList.remove("cursor__expand")
      }, 500)
    },
    // scrollSmooth(){
    //   const lenis = new Lenis()

    //     // lenis.on('scroll', (e) => {
    //     //   console.log(e)
    //     // })

    //     function raf(time) {
    //       lenis.raf(time)
    //       requestAnimationFrame(raf)
    //     }

    //     requestAnimationFrame(raf)
    // },
    animate(){
      const header = document.querySelector('header');
      header.style.willChange = 'transform'; // Trigger hardware acceleration
      requestAnimationFrame(() => {
        gsap.to(header, {
          y: 0,
          duration: 1,
          delay: 0.2
        });
      })
    }
  },
};



</script>