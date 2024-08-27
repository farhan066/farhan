<template>

  <section id="contact">
    <div class="wrapper">
      <div class="contact__top">
        <h2 class="contact__top__text text_up">Share a cool fact or join me for a chat.</h2>
        <div class="contact__top__circle--text"></div>
      </div> 

      <div class="contact_footer fade_simple">
        <ul class=" contact_footer_links">
            <li><a :href="'mailto:' + email" target="_blank" class="email"> {{ email }}<img class="arrow" src="@/assets/img/arrow.svg"/> </a></li>
            <li><a href="https://dribbble.com/dev_farhan" target="_blank ">Dribbble</a></li>
            <li><a href="https://github.com/farhan066" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/farhan-ahmad-8194591b7" target="_blank">Linkedin</a></li>
        </ul>
        <p class="contact_footer_copywrite">Designed and developed by me <br> ©{{ currentYear }} - All Rights Reserved</p>
      </div>
    </div>
  </section>
  
</template>

<script>

export default {
  data() {
    return {
      email: 'hello@farhannn.me',
      currentYear: new Date().getFullYear()
    }
  }
}
</script>
