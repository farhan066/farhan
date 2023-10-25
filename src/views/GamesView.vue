<template>
    <section id="games" v-if="!isGameLoaded">
        <h1 class="games_head">Enjoy instant <br /> gaming fun.</h1>
        <div class="wrapper">
            <GameCard v-for="(game, i) in gamesList" :game="game" :key="game.id" :index="i" @game-selected="loadGame" />
        </div>
    </section>

    <div v-else class="game_frame">
        <iframe :src="currentGameUrl" frameborder="0" allowfullscreen="true" id="game_iframe"></iframe>
        <button v-if="isGameLoaded" @click="goBack" class="game_frame_close btn-cap">Close</button>
    </div>
</template>

<script>
import GameCard from '@/components/GameCard.vue';
import games from "@/data/games.json"

export default {
    data() {
        return {
            gamesList: games,
            isGameLoaded: false,
            currentGameUrl: ''
        }
    },
    components: {
        GameCard
    },
    methods: {
        loadGame(url) {
            this.currentGameUrl = url;
            this.isGameLoaded = true;
        },
        goBack() {
            this.currentGameUrl = '';
            this.isGameLoaded = false;
            const iframe = document.getElementById('game_iframe');
            iframe.src = 'about:blank';  // Load a blank page
        }
    }
}

</script>