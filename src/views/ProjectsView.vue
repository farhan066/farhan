<template>
    <div class="projects-page">
        <section id="all-projects">
            <h1 class="page_head fade">Projects</h1>
            <div class="wrapper">
                <ProjectCard v-for="(pro, i) in projects" :pro="pro" :key="pro.id" :index="i" />
            </div>
        </section>

        <!-- <Form/> -->
    </div>
</template>

<script>
// Animations
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger);
// Animations End

import ProjectCard from "@/components/ProjectCard.vue"

export default {
    props: ["projects"],
    components: {
        ProjectCard
    },
    mounted() {
        this.animate()
    },
    methods: {
        animate() {
            const fadeSimple = document.querySelectorAll('.fade_simple')
            fadeSimple.forEach(el => {
                gsap.fromTo(el, {
                    opacity: 0
                },
                    {
                        scrollTrigger: {
                            trigger: el,
                            start: 'top 95%',
                            end: 'top 5%'
                        },
                        opacity: 1,
                        delay: .2,
                        duration: 1.2
                    })
            })
            const textUp = document.querySelectorAll('.text_up') //1
            textUp.forEach(word => {
                const text = new SplitType(word, { types: 'chars, words' })

                gsap.fromTo(text.chars, {
                    y: '100px'
                },
                    {
                        scrollTrigger: {
                            trigger: word,
                            start: 'top 95%',
                            end: 'top 5%'
                        },
                        y: 0,
                        stagger: .01,
                        delay: .3,
                        ease: 'expo.out',
                        duration: 1.2
                    })
            })
        }
    }
}
</script>