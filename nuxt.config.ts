// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    
    ssr: false, // Disable Server Side rendering
    target: 'static', // static site 
    builder: 'webpack',

    /* run time config */
    runtimeConfig: {
        public: {
            apiBaseUrl: process.env.NODE_ENV == 'production'
                ? 'https://backend.mumbai.avrioconnect.com/api' // changes this for production
                : 'https://devbackend.mumbai.avrioconnect.com/api', // change this for dev
        }
    },

    /* add global style files */
    css: [
        '@/assets/styles/main.scss',
        '~/assets/fonts/roboto/roboto.css'
    ],

    /* build configurations */
    build: {
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        loaders: {
            scss: {
                additionalData: '@import "@/assets/styles/variables.scss";',
                implementation: require('sass'),
            },
        },
    },


    /* scss variable file import in webpack */
    /* Using webpack instead of vite because of the pouchdb support */
    webpack: {
        extractCSS: {
            ignoreOrder: true
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    styles: {
                        name: 'styles',
                        test: /\.(css|vue)$/,
                        chunks: 'all',
                        enforce: true
                    }
                }
            }
        },
        loaders: {
            scss: {
                additionalData: '@import "@/assets/styles/variables.scss";',
                implementation: require('sass'),
            },
        },
    },

    modules: [
        '@pinia/nuxt',
    ],
})
