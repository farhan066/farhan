<template>
  <section id="contact">
    <div class="wrapper">
      <div class="contact__top">
        <h2 class="contact__top__text ta_opacity">Share a cool fact or join me for a chat.</h2>
        <div class="contact__top__circle--text"></div>
      </div> 

      <div class="contact__footer">
        <ul class="contact__footer__links">
          <li><a href="#" ></a></li>
            <li><a :href="'mailto:' + email" target="_blank" class="email ta_line_up"> {{ email }}<img class="arrow" src="@/assets/img/arrow.svg"/> </a></li>
            <li><a href="https://behance.com/farhanahmad9" target="_blank">Behance</a></li>
            <li><a href="https://github.com/farhan066" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/farhan-ahmad-8194591b7" target="_blank">Linkedin</a></li>
            <li><a href="https://fb.com/farhanahmad06" target="_blank">Facebook</a></li>
        </ul>
        <p class="contact__footer__copywrite">Designed and developed by me <br> ©{{ currentYear }} - All Rights Reserved</p>
      </div>
    </div>
    <!-- <p class="copyEmailAlert">Email Copied!</p> -->
  </section>
</template>

<script>

export default {
  data() {
    return {
      email: 'mail@farhannn.me',
      currentYear: new Date().getFullYear()
    }
  }
}
</script>


<!-- 
  <section id="contact">
    <div class="wrapper">
      <a class="contact-head" href="mailto:farhan06.contact@gmail.com" target="_blank">
        <h1 class="contact-text">
          Let's <br><span class="italic">Connect</span>
        </h1>
        <img src="@/assets/img/arrow.png" alt="Arrow" class="arrow">
      </a>
      <footer>

        <div class="social-icons">
          <ul>
            <li><a href="#" @click.prevent="copyEmail()"><i class="fa-regular fa-envelope"></i> </a></li>
            <li><a href="https://behance.com/farhanahmad9" target="_blank"><i class="fa-brands fa-behance"></i> </a></li>
            <li><a href="https://github.com/farhan066" target="_blank"><i class="fa-brands fa-github"></i> </a></li>
            <li><a href="https://www.linkedin.com/in/farhan-ahmad-8194591b7" target="_blank"><i
                  class="fa-brands fa-linkedin-in"></i> </a></li>
            <li><a href="https://fb.com/farhanahmad06" target="_blank"><i class="fa-brands fa-facebook-f"></i> </a></li>
            <li><a href="https://instagram.com/far_han_ig" target="_blank"><i class="fa-brands fa-instagram"></i> </a>
            </li>
          </ul>
        </div>
        <p class="copywrite">Designed and developed by me ©{{ currentYear }} - All Rights Reserved</p>
      </footer>
    </div>
    <p class="copyEmailAlert">Email Copied!</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: 'farhan06.contact@gmail.com',
      currentYear: new Date().getFullYear()
    }
  },
  methods: {
    copyEmailAlert() {
      const copyEmailAlert = document.querySelector('.copyEmailAlert');
      copyEmailAlert.classList.add('copyEmailAlert__show')

      setTimeout(() => {
        copyEmailAlert.classList.remove('copyEmailAlert__show')
      }, 1500)
    },
    copyEmail() {
      navigator.clipboard.writeText(this.email)
        .then(() => {
          this.copyEmailAlert();
        })
    }
  }
}
</script>
 -->