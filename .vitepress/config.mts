import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Bidaro',
  srcDir: 'src',
  themeConfig: {
    outline: [2, 3],
    socialLinks: [{ icon: 'github', link: 'https://github.com/bidaro-open-source' }],
  },
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru',
      themeConfig: {
        nav: [
          { text: 'О проекте', link: '/about/what-is-it', activeMatch: '/about/' },
          { text: 'Справочник', link: '/reference/infrastructure', activeMatch: '/reference/' },
          {
            text: '0.1.0',
            items: [
              {
                text: 'Changelog',
                link: '/changelog',
              },
            ],
          },
        ],
        sidebar: {
          '/about/': [
            {
              text: 'Начало',
              items: [
                { text: 'Что это такое?', link: '/about/what-is-it' },
                { text: 'Предметная область', link: '/about/subject-area' },
                { text: 'Бизнес анализ', link: '/about/business-analysis' },
                { text: 'Предыстория', link: '/about/prehistory' },
              ],
            },
            {
              text: 'Продукт',
              items: [
                { text: 'Общее видение', link: '/about/product/' },
                { text: 'Аутентификация', link: '/about/product/authentication' },
                { text: 'Авторизация', link: '/about/product/authorization' },
                { text: 'Профили', link: '/about/product/profiles' },
                { text: 'Торги', link: '/about/product/bidding' },
                { text: 'Каталог', link: '/about/product/catalog' },
                { text: 'Обслуживание', link: '/about/product/maintenance' },
              ],
            },
          ],
          '/reference/': [
            {
              text: 'Разработка',
              items: [
                { text: 'Инфраструктура', link: '/reference/infrastructure' },
                { text: 'Тестирование', link: '/reference/testing' },
              ],
            },
          ],
        },
      },
    },
  },
})
