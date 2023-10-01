// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/strapi",
    "@nuxt/ui",
    "@nuxt/image-edge",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
    "@pinia/nuxt",
  ],
  css: ["~/assets/css/main.css"],
  runtimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL,
    apiToken: process.env.STRAPI_API_TOKEN,
    public: {
      baseURL: "https://www.bigbangmag.com",
    },
  },
  googleFonts: {
    families: {
      Karla: {
        wght: [200, 400, 700],
        ital: [200, 400, 700],
      },
      Montserrat: {
        wght: [200, 400, 700],
        ital: [200, 400, 700],
      },
      Rubik: {
        wght: [300, 400, 700],
        ital: [300, 400, 700],
      },
      Poppins: {
        wght: [200, 400, 700],
        ital: [200, 400, 700],
      },
    },
  },
  strapi: {
    // devtools: true,
    cookieName: "jwt",
  },
});
