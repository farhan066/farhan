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
  <router-view :projects="projects" />
</template>

<script>
import list from "@/projects.json"
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
    }
  },
};



</script>