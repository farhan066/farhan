<template>
    <div class="games">
        <section id="games" v-if="!isGameLoaded">
            <h1 class="games_head fade">Enjoy instant <br /> gaming fun.</h1>
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
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger);

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
            const textUp = document.querySelectorAll('.text_up') //1
            textUp.forEach(word => {
                const text = new SplitType(word, { types: 'chars, words' })

                gsap.fromTo(text.chars, {
                    y: '100px'
                },
                    {
                        scrollTrigger: {
                            trigger: word,
                            start: 'top 95%'
                        },
                        y: 0,
                        stagger: .01,
                        delay: .3,
                        ease: 'expo.out',
                        duration: 1.5
                    })
            })
            const fadeUp = document.querySelectorAll(".fade_up")
            fadeUp.forEach((el) => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%",
                        // markers: true
                    },
                    opacity: 0,
                    y: 50,
                    duration: .6,
                    stagger: 3,
                    delay: .2
                })
            });

            const fadeLeft = document.querySelectorAll('.fade_left')

            fadeLeft.forEach(word => {
                const text = new SplitType(word, { types: 'words' })

                gsap.fromTo(text.words, {
                    opacity: 0,
                    x: -20
                },
                    {
                        scrollTrigger: {
                            trigger: word,
                            start: 'top 95%'
                        },
                        opacity: 1,
                        x: 0,
                        stagger: .05,
                        delay: .2
                    })
            })

            const fade = document.querySelectorAll('.fade')
            fade.forEach(word => {
                const text = new SplitType(word, { types: 'words' })

                gsap.fromTo(text.words, {
                    opacity: 0
                },
                    {
                        scrollTrigger: {
                            trigger: word,
                            start: 'top 95%'
                        },
                        opacity: 1,
                        stagger: .1,
                        delay: .2
                    })
            })
            ///

        }
    }
}

</script>
//'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)' full