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

<script setup lang="tsx">
const skills = [
    {
        position: "project 1",
        time: "2022-present",
        title: "Java",
        desc: "I learned java",
        icon: "logos:java",
    },
    {
        position: "Member",
        time: "2021-present",
        title: "Onshape",
        desc: "i cad",
        icon: "OnshapeIcon",
    },
    {
        position: "position",
        time: "time",
        title: "Fusion",
        desc: "i render",
        icon: "Fusion360Icon",
    },
];

useHead({
    title: 'Skills'
})
</script>


<style scoped></style>