<template>
    <div>
        <h2 class="title">Portfolio</h2>
        <p class="text-center pb-10">Here's a list of my major projects and experience in various fields.</p>
        <div class="flex gap-10 flex-wrap justify-center">
            <div class="grid grid-cols-1 gap-6 min-w-fit">
                <p class="port-subtitle">Experience</p>
                <div v-for="item in experiences">
                    <ExperienceList :experience="item" />
                </div>
            </div>

            <div class="grid grid-cols-1 gap-6 min-w-fit">
                <p class="port-subtitle">Projects</p>
                <div v-for="item in projects">
                    <ProjectListing :project="item" />
                </div>
            </div>
        </div>

    </div>
</template>

<script setup lang="tsx">
const projects = [
    {
        position: "project 1",
        time: "2022-present",
        title: "Stuy Fusion",
        desc: "i do robotics",
        image: "./img/479.png",
    },
    {
        position: "Member",
        time: "2021-present",
        title: "Science Olympiad",
        desc: "scioly",
        image: "./img/scioly.png",
    },
    {
        position: "position",
        time: "time",
        title: "title",
        desc: "desc",
        image: "",
    },
];

const experiences = [
    {
        position: "Vice President",
        time: "2022-present",
        title: "Stuy Fusion",
        desc: "i do robotics",
        image: "./img/479.png",
    },
    {
        position: "Member",
        time: "2021-present",
        title: "Science Olympiad",
        desc: "scioly",
        image: "./img/scioly.png",
    },
    {
        position: "position",
        time: "time",
        title: "title",
        desc: "desc",
        image: "",
    },
];

useHead({
    title: 'Portfolio'
})
</script>


<style scoped></style>