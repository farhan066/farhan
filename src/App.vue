<template>
  <PreLoader />

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
      <li><router-link to="/games">Mini Games</router-link></li>
      <li><router-link to="/blog">Blog</router-link></li>
    </ul>
    <p class="sidebar_footer">Scroll to close sidebar</p>
  </nav>



  <div class="cursor" :style="cursorStyle"></div>


  <Transition name="page" mode="out-in">
    <router-view :projects="projects" />
  </Transition>

  <!-- ===========contact============ -->
  <ContactSection />
</template>

<script>
import ContactSection from "./components/ContactSection.vue";
import PreLoader from "./components/PreLoader.vue";

import list from "@/data/projects.json"

import imagesloaded from "imagesloaded";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Lenis from "@studio-freight/lenis"
// import SplitType from 'split-type'

ScrollTrigger.config({ ignoreMobileResize: true });

export default {
  components: {
    ContactSection,
    PreLoader
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
    const content = document.getElementById('app')
    const imgLoad = imagesloaded(content)

    imgLoad.on('done', this.hideLoader)

    window.addEventListener("mousemove", this.updateCursor)
    document.addEventListener("click", this.scaleCursor)
    document.addEventListener("scroll", this.closeSidebar)
    this.scrollSmooth()

    this.animate()
  },
  methods: {
    hideLoader() {
      setTimeout(() => {
        gsap.to('.center', {
          opacity: .0
        })
        gsap.to('.bar', {
          delay: .2,
          scaleY: 0,
          stagger: .2,
          ease: 'power4.out'
        })
      }, 0)
    },
    updateCursor(e) {
      this.cursorX = e.clientX;
      this.cursorY = e.clientY;
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
    afterRouteEnter(to, from, next) {
      next(vm => {
        vm.animate();
      });
    },
    animate() {
      ////
    }

  },
};



</script>