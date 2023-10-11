<template>
  <div class="home">
    <!-- =======Intro====== -->
    <section id="intro">
      <div class="wrapper">
        <div class="intro-head">
          <span>Inquisitive,</span>
          <span>creative</span>
          <span>explorer</span>
          <p class="intro-p">
            Explore a world of curiosity and exploration. 
            Dive into captivating articles, stories, and inspiration. 
          </p>
        </div>
        <div class="blob"></div>
      </div>
    </section>

    <!-- ========About======= -->
    <section id="short-about">
      <div class="about-head">
        <img src="@/assets/img/farhan.jpg" class="circle-photo" alt="Farhan">
        <div class="btn-circle">More <br> About Me</div>
      </div>
      <div class="about-text">
        <p class="para">
          I'm Farhan, a student with a deep passion for exploration. Whether it's delving into the digital world or
          experimenting with digital design, I'm always on the lookout for new horizons.
          This is my canvas, where I share my creative works, hobbies, and the exciting journey of discovery. Join me as
          we navigate the realms of innovation and imagination!
        </p>
      </div>
    </section>

    <!-- =========Projects======== -->
    <section id="projects">
      <h1 class="headline">Feel free to explore a couple of <span class="highlight">websites</span> and <span
          class="highlight">visual designs</span> I've had some fun creating.</h1>
      <div class="wrapper">
        <ProjectCard 
          v-for="(pro, i) in projects"
          :pro="pro"
          :key="pro.id"
          :index="i"
        />
      </div>
    </section>

    <!-- ========contact========= -->
    <section id="contact">
      <div class="wrapper">
        <h1 class="contact-head">
          Let's <br><span class="italic">Connect</span>
          <img src="@/assets/img/arrow.png" alt="Arrow" class="arrow">
        </h1>
        <div class="social-icons">
          <ul>
            <li><a href="mailto:farhan06.contact@gmail.com" target="_blank"><i class="fa-regular fa-envelope"></i> </a></li>
            <li><a href="https://behance.com/farhanahmad9" target="_blank"><i class="fa-brands fa-behance"></i> </a></li>
            <li><a href="https://github.com/farhan066" target="_blank"><i class="fa-brands fa-github"></i> </a></li>
            <li><a href="https://www.linkedin.com/in/farhan-ahmad-8194591b7" target="_blank"><i class="fa-brands fa-linkedin-in"></i> </a></li>
            <li><a href="https://instagram.com/far_han_ig" target="_blank"><i class="fa-brands fa-facebook-f"></i> </a></li>
            <li><a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i> </a></li>
          </ul>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue"

export default {
  props:["projects"],
  components: {
    ProjectCard
  }
}
</script>


 <!-- =========hobby======== -->
    <!-- <section id="hobby">
      <h1 class="headline">
        Solving the Colours : <span class="highlight">Cubing Chronicles</span>
      </h1>
      <div class="wrapper grid col-2">
        <div class="left"><img src="@/assets/img/cube.jpg" alt="Rubiks Cube">
        </div>
        <div class="right">
          <p class="para">I've got a soft spot for the Rubik's Cube. On a good day, I can solve it in about 20 seconds. My
            best time? A speedy 13.25 seconds - Not too shabby, right?

            I've even tried my hand at solving it blindfolded. My record 2 minutes and 30 seconds. I've also tackled some
            other fun puzzles like the Megaminx, 2x2 cube, and the funky Mirror Cube.

            Here's a mind-boggling fact: the 3x3 Rubik's Cube has a whopping 43 quintillion possible combinations.
            Mind-blowing, isn't it?</p>
        </div>
      </div>
    </section> -->