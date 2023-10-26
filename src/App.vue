<template>
  <header>
    <div class="logo">
      <a href="/"><img src="./assets/img/logo.png" alt="Farhan Logo"></a>
    </div>
    <nav class="menu">
      <ul>
        <li><router-link to="/" class="btn-cap">Home</router-link></li>
        <li><router-link to="/games" class="btn-cap">Games</router-link></li>
        <li><router-link to="/blog" class="btn-cap">Blog</router-link></li>
      </ul>
    </nav>
  </header>

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
    this.scrollSmooth()
    // this.gsapLenis()
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
    scrollSmooth() {
      const lenis = new Lenis({
        smoothTouch: true,
        duration:.8
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