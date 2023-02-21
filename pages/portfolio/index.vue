<template>
    <div>
        <h2 class="title">Portfolio</h2>
        <p class="text-center pb-10">Here's a list of my major projects and experience in various fields.</p>
        <div class="flex gap-10 flex-wrap justify-center">
            <div class="grid grid-cols-1 gap-6 min-w-fit">
                <p class="port-subtitle">Experience</p>
                <div v-for="item in experiences">
                    <ExperienceList :experience="item"></ExperienceList>
                </div>
            </div>

            <div class="grid grid-cols-1 gap-6 min-w-fit">
                <p class="port-subtitle">Projects</p>
                <div v-for="item in projects">
                    <ProjectListing :project="item"></ProjectListing>
                </div>
                <div></div>
            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
const experiences = [
    {
        position: "Vice President",
        time: "2022-present",
        title: "Stuy Fusion",
        desc: "Joined as a member in 2021, elected to vice-president in June 2022. Managed team finances, engineering and programming efforts in the 2022-2023 FTC season. Oversaw and planned trip of >40 students at the Maryland Tech Invitational.",
        image: "./img/479.png",
        link: "https://fusion479.com/",
    },
    {
        position: "Member",
        time: "2021-present",
        title: "Science Olympiad",
        desc: "Participated in Stuyvesant's award winning Science Olympiad team. Worked on solving engineering challenges such as building bridges and model planes.",
        image: "./img/scioly.png",
        link: "https://stuyscioly.github.io/",
    },
    {
        position: "Mentor",
        time: "2023",
        title: "Desktop Robotics",
        desc: "mentor",
        image: "./img/desktopRobotics.jpg",
        link: "https://deskotics-site.vercel.app/",
    },
];

const projects = [
    {
        position: "",
        time: "2021-present",
        title: "Robot Rendering",
        desc: "Used Fusion 360 to render photorealistic images of FTC 479\'s robot in the 2021-22 and 2022-23 FTC seasons.",
        image: "./img/render.png",
        link: "/portfolio/renders",
    },
    {
        position: "",
        time: "2022-present",
        title: "Web Development",
        desc: "I do webdev",
        image: "./img/scioly.png",
        link: "/portfolio/webdev",
    },
];

useHead({
    title: "Haokun Xu | Portfolio"
})
</script>