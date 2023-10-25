<template>
    <div class="game_card">
            <div class="img">
            <img :src="require(`@/assets/img/${game.img}`)" :alt="game.title">
        </div>
        <div class="details">
            <h2 class="title">{{ game.title }}</h2>
            <p class="desc">{{ game.desc }}</p>
            <p class="author">by <a :href="game.authorLink" target="_blank">{{ game.author }}</a></p>
        </div>
    </div>
</template>

<script>

export default{
    props:['game']
}
</script>