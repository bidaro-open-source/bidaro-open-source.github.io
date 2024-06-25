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
          {
            text: '0.1.0',
            items: [
              { text: 'Changelog', link: '/changelog' },
            ],
          },
        ],
        sidebar: {
          '/about/': [
            {
              text: 'Введение',
              base: '/about/',
              items: [
                { text: 'Что такое Bidaro?', link: 'what-is-it' },
                { text: 'Предметная область', link: 'subject-area' },
                { text: 'Бизнес анализ', link: 'business-analysis' },
                { text: 'Предыстория', link: 'prehistory' },
              ],
            },
            {
              text: 'Продукт',
              base: '/about/product/',
              items: [
                { text: 'Общее видение', link: '/' },
                { text: 'Аутентификация', link: 'authentication' },
                { text: 'Авторизация', link: 'authorization' },
                { text: 'Профили', link: 'profiles' },
                { text: 'Торги', link: 'bidding' },
                { text: 'Каталог', link: 'catalog' },
                { text: 'Обслуживание', link: 'maintenance' },
              ],
            },
            {
              text: 'Разработка',
              base: '/about/development/',
              items: [
                { text: 'Правила', link: 'rules' },
                { text: 'Приложения', link: 'applications' },
                { text: 'Тестирование', link: 'tests' },
                { text: 'Локальное окружение', link: 'local-environment' },
              ],
            },
            {
              text: 'Продакшен',
              base: '/about/production/',
              items: [
                { text: 'Инфраструктура', link: 'infrastructure' },
                { text: 'Процесс обновления', link: 'update' },
                { text: 'Резервное копирование', link: 'backup' },
              ],
            },
          ],
        },
      },
    },
  },
})
