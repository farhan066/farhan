<template>
    <div class="games">
        <section id="games" v-if="!isGameLoaded">
            <h1 class="games_head text_up">Enjoy instant <br /> gaming fun.</h1>
            <div class="wrapper">
                <GameCard class="fade_up" v-for="(game, i) in gamesList" :game="game" :key="game.id" :index="i"
                    @game-selected="loadGame" />
            </div>
        </section>

        <div v-else class="game_frame">
            <iframe :src="currentGameUrl" frameborder="0" allowfullscreen="true" id="game_iframe"></iframe>
            <button v-if="isGameLoaded" @click="goBack" class="game_frame_close btn-cap">Close</button>
        </div>
        <p class="game_loading">Preparing...</p>
    </div>
</template>

<script>
import GameCard from '@/components/GameCard.vue';
import games from "@/data/games.json"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import SplitType from 'split-type'

export default {
    data() {
        return {
            gamesList: games,
            isGameLoaded: false,
            currentGameUrl: ''
        }
    },
    mounted() {
        this.animate()
    },
    components: {
        GameCard
    },
    methods: {
        loadGame(url) {
            this.currentGameUrl = url;
            this.isGameLoaded = true;
            const gameLoading = document.querySelector(".game_loading")
            gameLoading.classList.add("game_loading_show")

            setTimeout(() => {
                gameLoading.classList.remove("game_loading_show")
            }, 2000);
        },
        goBack() {
            this.currentGameUrl = '';
            this.isGameLoaded = false;
            const iframe = document.getElementById('game_iframe');
            iframe.src = 'about:blank';  // Load a blank page
        },
        animate() {
            const fadeUp = document.querySelectorAll(".fade_up")
            fadeUp.forEach((el) => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        markers: true
                    },
                    opacity: 0,
                    y: 50,
                    duration: .6,
                    stagger: 3,
                    delay: .2
                })
            });
            // ======
            const textUp = document.querySelectorAll(".text_up")
            textUp.forEach((char)=>{
                const text = new SplitType(char, {types: 'chars, words'})

                gsap.from(text.words,{
                    scrollTrigger: {
                        trigger: char,
                        start: "top 90%",
                        markers: true
                    },
                    opacity:.2,
                    duration:1,
                    stagger:.3
                })
            })
        }
    }
}

</script>