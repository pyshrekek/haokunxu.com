<template>
    <div class="card min-w-[600px] max-w-[600px]">
        <Icon :name="skill.icon" size="150"></Icon>
        <div class="flex flex-col">
            <h3 class="card-title">{{ skill.title }}</h3>
            <p class="card-details">{{ skill.desc }}</p>
        </div>
    </div>
</template>

<script setup>
    const { skill } = defineProps(['skill'])
</script>

<style scoped>
</style>