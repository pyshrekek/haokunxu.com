<template>
    <div>
        <h2 class="title">Skills</h2>
        <p class="subtitle">Here are the skills I've acquired over the years.</p>
        <div class="flex gap-x-10 gap-y-6 flex-wrap justify-center">
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
        link: "https://www.autodesk.com/products/fusion-360/overview",
    },
    {
        time: "2022",
        title: "TailwindCSS",
        desc: "I use TailwindCSS to speed up web development and to create elegant sites, like this one!",
        icon: "logos:tailwindcss-icon",
        link: "https://tailwindcss.com/",
    },
    {
        time: "2022",
        title: "Vue.js",
        desc: "",
        icon: "logos:vue",
        link: "https://vuejs.org/",
    },
    {
        time: "2021",
        title: "Onshape",
        desc: "I use Onshape frequently to CAD our FTC team's robot to ensure precise measurements and design.",
        icon: "OnshapeIcon",
        link: "https://www.onshape.com/en/",
    },
    {
        time: "2021",
        title: "Java",
        desc: "I learned Java as a way to build Android apps. I now use it to code robots in FTC.",
        icon: "logos:java",
        link: "https://dev.java/",
    },
    {
        time: "2021",
        title: "Python",
        desc: "",
        icon: "logos:python",
        link: "https://www.python.org/",
    },
    {
        time: "2021",
        title: "TypeScript",
        desc: "",
        icon: "logos:typescript-icon",
        link: "https://www.typescriptlang.org/",
    },
    {
        time: "2021",
        title: "JavaScript",
        desc: "",
        icon: "logos:javascript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        time: "2020",
        title: "CSS",
        desc: "",
        icon: "vscode-icons:file-type-css",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        time: "2020",
        title: "HTML",
        desc: "",
        icon: "vscode-icons:file-type-html",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    }
];

useHead({
    title: 'Haokun Xu | Skills'
})
</script>


<style scoped></style>