<template>
    <div>
        <p>Project {{ projectname }}</p>
        <p>{{ project.title }}</p>
        <p>{{ project.price }}</p>
    </div>
</template>

<script setup>
    const { projectname } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + projectname

    const { data: project } = await useFetch(uri)
</script>

<style scoped>

</style>