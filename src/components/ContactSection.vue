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
        <p class="contact__footer__copywrite">FARHAN WEB 3.0 || Designed and developed by me <br> ©{{ currentYear }} - All Rights Reserved</p>
      </div>
    </div>
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
