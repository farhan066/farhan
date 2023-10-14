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
        <a href="#" class="btn-cir">More <br> About Me</a>
      </div>
      <div class="about-text">
        <p class="para">
          I'm Farhan, a student with a deep passion for exploration. Whether it's delving into the digital world or
          experimenting with digital design, I'm always on the lookout for new horizons. <br><br>
          This is my canvas, where I share my creative works, hobbies, and the exciting journey of discovery. Join me as
          we navigate the realms of innovation and imagination!
        </p>
      </div>
    </section>

    <!-- =========Projects======== -->
    <section id="projects">
      <h1 class="headline">Feel free to explore a couple of <span class="highlight">projects</span> I've had some fun working on.</h1>
      
      <div class="wrapper">
        <ProjectCard 
          v-for="(pro, i) in projects"
          :pro="pro"
          :key="pro.id"
          :index="i"
        />
      </div>
    </section>

   <!-- ===========contact============ -->
   <ContactSection />

  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard.vue"
import ContactSection from "@/components/ContactSection.vue"

export default {
  props:["projects"],
  components: {
    ProjectCard,
    ContactSection
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