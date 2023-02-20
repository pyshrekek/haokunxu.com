

<template>
    <div>
        <h2 class="title">Portfolio</h2>
        <p class="text-center pb-10">My portfolio</p>
        <div class="grid grid-cols-1 gap-10">
            <div v-for="item in projects">
                <ProjectListing :project="item"/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
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
            ]
        }
    },
}

useHead({
    title: 'Portfolio'
})
</script>


<style scoped></style>