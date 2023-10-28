<template>
  <header>
    <div class="logo">
      <a href="/"><img src="./assets/img/logo.png" alt="Farhan Logo"></a>
    </div>

    <button class="nav_btn" @click="openSidebar"><img src="@/assets/img/nav-icon.svg" alt="" class="nav_icon"></button>

  </header>
  <nav :class="['sidebar', { 'sidebar_show': showSidebar }]">
    <button class="nav_btn" @click="openSidebar"><img src="@/assets/img/close-icon.svg" alt="" class="close_icon"></button>
    <ul class="page_links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/games">Web Fun</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
    </ul>
  </nav>

  <div class="cursor" :style="cursorStyle"></div>

  <Transition name="page" mode="out-in" >
    <router-view :projects="projects" />
  </Transition>

 <!-- ===========contact============ -->
 <ContactSection />

</template>

<script>
import ContactSection from "./components/ContactSection.vue";
import list from "@/data/projects.json"
import Lenis from "@studio-freight/lenis"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

export default {
  components:{
    ContactSection
  },
  data() {
    return {
      projects: list,
      cursorX: 0,
      cursorY: 0,
      showSidebar: false
    }
  },
  computed: {
    cursorStyle() {
      return {
        top: this.cursorY + 'px',
        left: this.cursorX + 'px'
      };
    },
  },
  mounted() {
    window.addEventListener("mousemove", this.updateCursor)
    document.addEventListener("click", this.scaleCursor)
    this.scrollSmooth()
  },
  methods: {
    updateCursor(e) {
      this.cursorX = e.pageX;
      this.cursorY = e.pageY;
    },
    openSidebar(){
      this.showSidebar = !this.showSidebar
    },
    scaleCursor() {
      const cursor = document.querySelector('.cursor')
      cursor.classList.add("cursor__expand")
      setTimeout(() => {
        cursor.classList.remove("cursor__expand")
      }, 500)
    },
    scrollSmooth() {
      const lenis = new Lenis({
        smoothTouch: true,
        lerp:.05,
        syncTouch:true
      })

      lenis.on('scroll', (e) => {
        console.log(e)
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

    }
    
  },
};



</script>