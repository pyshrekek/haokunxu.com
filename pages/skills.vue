<template>
    <div>
        <h2 class="title">Skills</h2>
        <p class="text-center pb-10">Here are the skills I've acquired over the years.</p>
        <div class="flex gap-10 flex-wrap justify-center">
                <div v-for="item in skills">
                    <SkillList :skill="item" />
            </div>
        </div>
    </div>
</template>

<script setup>
const skills = [
    {
        time: "2022",
        title: "Fusion 360",
        desc: "I use Autodesk Fusion 360 as a way to perform CAM (computer aided machining) and rendering of models.",
        icon: "Fusion360Icon",
    },
    {
        time: "2022",
        title: "TailwindCSS",
        desc: "I use TailwindCSS to speed up web development and to create elegant sites, like this one!",
        icon: "logos:tailwindcss-icon",
    },
    {
        time: "2022",
        title: "Vue.js",
        desc: "",
        icon: "logos:vue",
    },
    {
        time: "2021",
        title: "Onshape",
        desc: "I use Onshape frequently to CAD our FTC team's robot to ensure precise measurements and design.",
        icon: "OnshapeIcon",
    },
    {
        time: "2021",
        title: "Java",
        desc: "I learned Java as a way to build Android apps. I now use it to code robots in FTC.",
        icon: "logos:java",
    },
    {
        time: "2021",
        title: "Python",
        desc: "",
        icon: "logos:python",
    },
    {
        time: "2021",
        title: "TypeScript",
        desc: "",
        icon: "logos:typescript-icon",
    },
    {
        time: "2021",
        title: "JavaScript",
        desc: "",
        icon: "logos:javascript",
    },
    {
        time: "2020",
        title: "CSS",
        desc: "",
        icon: "logos:css-3",
    },
    {
        time: "2020",
        title: "HTML",
        desc: "",
        icon: "logos:html-5",
    }
];

useHead({
    title: 'Haokun Xu | Skills'
})
</script>


<style scoped></style>