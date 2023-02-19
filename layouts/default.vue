<template>
    <div>
        <header class="header">
            <nav class="navbar">
                <NuxtLink to="/" class="home-btn">Home</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/experience" class="nav-btn">Experience</NuxtLink></li>
                    <li><NuxtLink to="/skills" class="nav-btn">Skills</NuxtLink></li>
                    <li><NuxtLink to="/projects" class="nav-btn">Projects</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>

        <footer>
            <p class="dark-mode-toggle"></p>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .router-link-exact-active.nav-btn {
        background-color: rgb(167 139 250);
        border-color: rgb(213, 199, 255);
    }
</style>