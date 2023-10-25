<template>
  <header>
    <div class="logo">
      <a href="/"><img src="./assets/img/logo.png" alt="Farhan Logo"></a>
    </div>
    <nav class="menu">
      <ul>
        <li><router-link to="/games" class="btn-cap">Games</router-link></li>
      </ul>
    </nav>
  </header>

  <div class="cursor" :style="cursorStyle"></div>

  <router-view :projects="projects" />

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
    // this.scrollSmooth()
    this.gsapLenis()
    ScrollTrigger.config({ ignoreMobileResize: true });
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
        smoothTouch: true
      })

      lenis.on('scroll', (e) => {
        console.log(e)
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)

    },
    gsapLenis() {
      const lenis = new Lenis({
        smoothTouch: true
      })

      lenis.on('scroll', ScrollTrigger.update)

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000)
        // requestAnimationFrame(raf)
      })

      gsap.ticker.lagSmoothing(0)
      // requestAnimationFrame(raf)
    }
  },
};



</script>