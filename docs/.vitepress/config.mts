import { defineConfig } from 'vitepress'

const isProduction = process.env.NODE_ENV === 'production'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Wiki",
  base: isProduction ? "/wiki/" : "/",
  description: "Taiwan Web Technology Promotion Organization",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
  }
})
