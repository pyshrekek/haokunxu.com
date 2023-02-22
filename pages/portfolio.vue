<template>
    <div>
        <h2 class="title">Portfolio</h2>
        <p class="subtitle">Here's a list of my major projects and experience in various fields.</p>
        <p class="text-center text-lg">Click on each item to learn more!</p>
        <div class="flex gap-10 flex-wrap justify-center">
            <div class="grid grid-cols-1 gap-6 min-w-fit pb-6">
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
        time: "Sep 2021-present",
        title: "Stuy Fusion",
        desc: "Joined as a member in 2021, elected to vice-president in June 2022. Managed team finances, engineering and programming efforts in the 2022-2023 FTC season.",
        image: "./img/479.png",
        link: "https://fusion479.com/",
    },
    {
        position: "Member",
        time: " Sep 2021-present",
        title: "Science Olympiad",
        desc: "Participated in Stuyvesant's award winning Science Olympiad team. Worked on solving engineering challenges such as building bridges and model planes.",
        image: "./img/scioly.png",
        link: "https://stuyscioly.github.io/",
    },
    {
        position: "Mentor",
        time: "Jan 2023-present",
        title: "Desktop Robotics",
        desc: "Mentored upstart FTC team at the Bronx High School of Science. Provided crucial resources and support. Assisted in organizing lessons and team.",
        image: "./img/desktopRobotics.jpg",
        link: "https://deskotics-site.vercel.app/",
    },
];

const projects = [
    {
        position: "",
        time: " Dec 2021-present",
        title: "Robot Rendering",
        desc: "Used Fusion 360 to render photorealistic images of FTC 479\'s robot in the 2021-22 and 2022-23 FTC seasons.",
        image: "./img/render.png",
        link: "/renders",
    },
    {
        position: "",
        time: "Jan 2022-present",
        title: "STEM Talks",
        desc: "Presented at and helped organize Stuy Splash, an annual conference for FIRST teams. Presented about CNC Machining for FTC and FRC to a group of ~50 people. Taught mechanical principles and robotics to ~100 fourth graders.",
        image: "./img/stuysplash.png",
        link: "/webdev",
    },
    {
        position: "",
        time: "Dec 2021-present",
        title: "Manufacturing",
        desc: "Used various CNC machinines such as routers, 3D printers, and laser cutters to quickly manufacture parts for teams and personal projects.",
        image: "./img/empty.png",
        link: "",
    },
];

useHead({
    title: "Haokun Xu | Portfolio"
})
</script>