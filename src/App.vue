<template>
  <header>
    <div class="logo">
      <img src="./assets/img/logo.png" alt="Farhan Logo">
    </div>
    <nav class="menu">
      <ul>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  </header>
  <router-view
  :projects="projects"
  />
</template>

<script>
  import list from "@/projects.json"
  export default{
    data(){
      return{
        projects: list
      }
    }
  }
</script>