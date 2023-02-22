<template>
    <a :href="experience.link" target="_blank">
        <div class="card text-center exp-card">
            <img :src="experience.image" alt="alt text stub" class="portfolio-img">
            <div class="flex flex-col place-content-center">
                <div class="card-position">
                    <p>{{ experience.position }} | {{ experience.time }}</p>
                </div>
                <h3 class="card-title">{{ experience.title }}</h3>
                <p class="card-details">{{ experience.desc }}</p>
            </div>
        </div>
    </a>
</template>

<script setup>
const { experience } = defineProps(['experience'])
</script>

<style scoped></style>