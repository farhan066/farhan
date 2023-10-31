<template>
  <header>
    <div class="logo">
      <a href="/"><img src="./assets/img/logo.png" alt="Farhan Logo"></a>
    </div>

    <button class="nav_btn" @click="openSidebar"><img src="@/assets/img/nav-icon.svg" alt="" class="nav_icon"></button>

  </header>

  <nav :class="['sidebar', { 'sidebar_show': showSidebar }]">
    <button class="nav_btn" @click="closeSidebar"><img src="@/assets/img/close-icon.svg" alt=""
        class="close_icon"></button>
    <ul class="page_links" @click="closeSidebar">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/games">Web Fun</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
    </ul>
  </nav>



  <div class="cursor" :style="cursorStyle"></div>

  <!-- <div v-if="isLoading" class="loading_screen">
  </div> -->
  <main>
    <Transition name="page" mode="out-in">
      <router-view :projects="projects" />
    </Transition>
  </main>

  <!-- <svg>
    <filter id='noiseFilter'>
      <feTurbulence type='fractalNoise' baseFrequency='3' stitchTiles='stitch' />
      <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
      <feComposite operator="in" in2="SourceGraphic" result="monoNoise" />
      <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
    </filter>

  </svg> -->



  <div class="blur"></div>
  <div class="props">
    <div></div>
    <div></div>
  </div>

  <!-- ===========contact============ -->
  <ContactSection />
</template>

<script>
import ContactSection from "./components/ContactSection.vue";

import list from "@/data/projects.json"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Lenis from "@studio-freight/lenis"
// import SplitType from 'split-type'
ScrollTrigger.config({ ignoreMobileResize: true });
// ScrollTrigger.normalizeScroll(true)
ScrollTrigger.observe({
            trigger: 'body',
            type: "touch,pointer", // comma-delimited list of what to listen for ("wheel,touch,scroll,pointer")
            onUp: () => { ScrollTrigger.update(); },
        });
export default {
  components: {
    ContactSection
  },
  data() {
    return {
      projects: list,
      cursorX: 0,
      cursorY: 0,
      showSidebar: false,
      isLoading: true
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
    document.addEventListener("scroll", this.closeSidebar)
    // this.scrollSmooth()

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

    this.animate()
  },
  methods: {
    updateCursor(e) {
      this.cursorX = e.pageX;
      this.cursorY = e.pageY;
    },
    openSidebar() {
      this.showSidebar = true
    },
    closeSidebar() {
      this.showSidebar = false
    },
    scaleCursor() {
      const cursor = document.querySelector('.cursor')
      cursor.classList.add("cursor__expand")
      setTimeout(() => {
        cursor.classList.remove("cursor__expand")
      }, 500)
    },
    scrollSmooth() {
      const lenis = new Lenis()

      lenis.on('scroll', (e) => {
        console.log(e)
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

    },
    animate() {

    }
  },
};



</script>