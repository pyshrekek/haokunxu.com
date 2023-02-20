<template>
    <div>
        <header class="header">
            <nav class="navbar">
                <NuxtLink to="/" class="home-btn">Home</NuxtLink>
                <ul class="flex gap-4">
                    <li><NuxtLink to="/skills" class="nav-btn">Skills</NuxtLink></li>
                    <li><NuxtLink to="/portfolio" class="nav-btn">Portfolio</NuxtLink></li>
                </ul>
            </nav>
        </header>

        <div class="container mx-auto p-4">
            <slot />
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .router-link-exact-active.nav-btn {
        background-color: #a78bfa;
    }
    .router-link-exact-active.home-btn {
        color: #a78bfa;
    }
</style>