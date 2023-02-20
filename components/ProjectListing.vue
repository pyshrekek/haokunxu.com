<template>
    <div class="card text-center">
        <img :src="project.image" alt="alt text stub" class="portfolio-img">
        <div class="flex flex-col">
            <div class="card-position">
                <p>{{ project.time }}</p>
            </div>
            <h3 class="card-title">{{ project.title }}</h3>
            <p class="card-details">{{ project.desc }}</p>
        </div>
    </div>
</template>

<script setup>
    const { project } = defineProps(['project'])
</script>

<style scoped>
</style>