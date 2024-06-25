# Приложения

Весь продукт состоит из приложений.

Каждое приложение имеет свою версию и упаковывается в Docker контейнер.

:::tip Про разделение
Разделение на приложения нужно, чтобы логически отделить не связанный код в отдельные контейнеры и запускать их по необходимости или по готовому сценарию. Стек и языки программирования таких приложений могут быть не связаны между собой.
:::

## Bidaro <Badge type="tip" text="In develop" />

Full-stack приложение с которым взаимодействуют пользователи. Написан на фреймворке [Nuxt](https://nuxt.com).

- Frontend посылает запросы на Backend.
- Backend принимает запросы от пользователей, подключается ко внешним сервисам и производит необходимые манипуляции с данными без сохранения состояния на сервере.
- Может быть запущен в нескольких одновременно работающих экземплярах.

Смотрите: [GitHub](https://github.com/bidaro-open-source/bidaro), [DockerHub](https://hub.docker.com/r/dmitrytavern/bidaro)

## Bidaro migrator <Badge type="tip" text="In develop" />

Приложение для изменения структуры базы данных. Использует [umzug](https://github.com/sequelize/umzug) для контроля миграций.

Смотрите: [GitHub](https://github.com/bidaro-open-source/bidaro-migrator), [DockerHub](https://hub.docker.com/r/dmitrytavern/bidaro-migrator)

## Bidaro backupper <Badge type="info" text="In process" />

Приложение для создание резервной копии и восстановления данных продукта.

## Bidaro maintenance <Badge type="info" text="In process" />

Приложение для информировании пользователей о технических работах.

## Bidaro control panel <Badge type="info" text="In process" />

Приложение для управления всеми данными продукта со стороны администратора.
