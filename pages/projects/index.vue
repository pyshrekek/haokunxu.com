<template>
    <div>
        <h2 class="title">Projects</h2>
        <div class = "grid grid-cols-3 gap-5">
            <div v-for="p in projects">
                <ProjectListing :to="`/projects/${p.name}`">{{ p.desc }}</ProjectListing>
            </div>
        </div>
    </div>
</template>

<script setup>
    const { projects: projects } = await useFetch('/data/projects.ts')
</script>

<style scoped>
</style>