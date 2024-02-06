// https://nuxt.com/docs/api/configuration/nuxt-config
import path from "path";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
    srcDir: path.resolve(__dirname, "app"),
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        (_options, nuxt) => {
            nuxt.hooks.hook("vite:extendConfig", (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({ autoImport: true }));
            });
        },
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    vite: {
        define: {
            "process.env.DEBUG": "false",
        },
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },

    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
    build: {
        transpile: [
            "vuetify",
            "@fortawesome/fontawesome-svg-core",
            "@fortawesome/free-brands-svg-icons",
        ],
    },
    css: ["@fortawesome/fontawesome-svg-core/styles.css"],
});
