<template>
    <div class="card text-center">
        <img :src="experience.image" alt="alt text stub" class="portfolio-img">
        <div class="flex flex-col">
            <h3 class="card-title">{{ experience.title }}</h3>
            <p class="card-details">{{ experience.desc }}</p>
        </div>
    </div>
</template>

<script setup>
    const { experience } = defineProps(['experience'])
</script>

<style scoped>
</style>