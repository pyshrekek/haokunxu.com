<template>
    <a :href="skill.link" target="_blank">
    <div class="card skill-card">
        <Icon :name="skill.icon" size="150"></Icon>
        <div class="flex flex-col justify-center">
            <div class="card-position text-2xl">
                <p>{{ skill.time }}</p>
            </div>
            <h3 class="card-title">{{ skill.title }}</h3>
            <!-- <p class="card-details">{{ skill.desc }}</p> -->
        </div>
    </div>
</a>
</template>

<script setup>
    const { skill } = defineProps(['skill'])
</script>

<style scoped>
</style>