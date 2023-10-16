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
  <div class="cursor"></div>
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
    },
    mounted(){
    const cursor = document.querySelector(".cursor")
         
         document.addEventListener('mousemove', e =>{
           cursor.setAttribute("style", "top: "+e.pageY+"px; left: "+e.pageX+"px;")
         })
  }
  }
  

</script>