<template>
    <div class="card">
        <a class="img" :href="pro.link" target="_blank">
            <img :src="require(`@/assets/img/${pro.image}`)" :alt="pro.title">
        </a>
        <h2 class="project-title">{{ pro.title }}</h2>
    </div>
</template>

<script>
    export default{
        props:['pro'],
        data(){
            return{

            }
        }
    }
</script>