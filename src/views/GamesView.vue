<template>
    <section id="games">
        <h1 class="games_head">Enjoy instant <br /> gaming fun.</h1>

        <div class="wrapper">
            <GameCard
            v-for="(game, i) in gamesList"
            :game="game"
            :key="game.id"
            :index="i"
            />
        </div>
    </section>
</template>

<script>
import GameCard from '@/components/GameCard.vue';
import games from "@/data/games.json"

export default {
    data(){
        return{
            gamesList:games
        }
    },
    components: {
        GameCard
    }
}

</script>