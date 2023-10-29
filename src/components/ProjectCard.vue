<template>
    <div class="card">
       <div class="card-text">
        <h2 class="card-title text_up">{{ pro.title }}</h2>
        <p class="card-subtitle">{{ pro.tools }}</p>
       </div>
       <div class="card-img">
        <a class="card-link" :href="pro.link" target="_blank">
            <img :src="require(`@/assets/img/${pro.img}`)" :alt="pro.title">
        </a>
        </div>
    </div>
</template>

<script>
    export default{
        props:['pro']
    }
</script>