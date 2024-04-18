<template>
    <div class="home-flex">
        <h1 class="home-title">
            Haokun Xu
        </h1>
        <div class="home-subflex">
            <p class="home-text text-left">Incoming freshman at
            <p class="home-vandy">Vanderbilt University</p>
            <p class="home-subtext text-left"><a class="home-majors">Electrical and Computer Engineering +
                    Mathematics</a> </p>
            </p>
            <hr class="gap">
            <p class="home-text text-left">Interested in robotics, digital fabrication, and microelectronics.</p>
        </div>
        <div class="socials">
            <a href="https://github.com/pyshrekek" target="_blank" class="socials-icon">
                <Icon name="fa6-brands:github" size="55"></Icon>
            </a>
            <a href="https://www.linkedin.com/in/haokun-xu-6299b1251/" target="_blank" class="socials-icon">
                <Icon name="fa6-brands:linkedin" size="55"></Icon>
            </a>
            <a href="mailto:haokunxu40@gmail.com" target="_blank" class="socials-icon">
                <Icon name="carbon:email" size="55"></Icon>
            </a>
        </div>
        <a href="./resume/haokun-xu-resume.pdf" target="_blank" class="home-resume-text">view my resume here</a>
    </div>
</template>

<script setup lang="ts">
    definePageMeta({
        layout: 'home'
    })
</script>