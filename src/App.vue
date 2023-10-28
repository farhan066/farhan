<template>
  <header>
    <div class="logo">
      <a href="/"><img src="./assets/img/logo.png" alt="Farhan Logo"></a>
    </div>

    <button class="nav_btn" @click="toggleSidebar"><img src="@/assets/img/nav-icon.svg" alt="" class="nav_icon"></button>

  </header>

  <nav :class="['sidebar', { 'sidebar_show': showSidebar }]">
    <button class="nav_btn" @click="toggleSidebar"><img src="@/assets/img/close-icon.svg" alt=""
        class="close_icon"></button>
    <ul class="page_links" @click="toggleSidebar">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/games">Web Fun</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
    </ul>
  </nav>
  <div class="props">
    <div class=""></div>
    <div class=""></div>
  </div>
  <div class="cursor" :style="cursorStyle"></div>

  <!-- <div v-if="isLoading" class="loading_screen">
  </div> -->
  <main>
    <Transition name="page" mode="out-in">
      <router-view :projects="projects" />
    </Transition>
  </main>

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
    this.scrollSmooth()

    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
  methods: {
    updateCursor(e) {
      this.cursorX = e.pageX;
      this.cursorY = e.pageY;
    },
    toggleSidebar() {
      this.showSidebar = !this.showSidebar
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

    }

  },
};



</script>