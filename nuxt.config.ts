// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
    ],
    app: {
        head: {
            title: 'Haokun Xu',
            meta: [
                { name: 'description', content: 'About Haokun Xu'}
            ],
        }
    },
    plugins: [
        { 
            src: '~/plugins/vercel.ts', mode: 'client' 
        }
    ],
})
