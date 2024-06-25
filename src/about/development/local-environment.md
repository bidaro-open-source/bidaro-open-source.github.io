# Локальное окружение

Чтобы начать разрабатывать продукт, для начала его нужно развернуть на собственном компютере.

Основным пакетным менеджером и JavaScript рантаймом является **Bun**.

Чтобы поднимать внешние сервисы используется **Docker** и **Docker Compose**.

## Процесс развертки

- Установить [Bun](https://bun.sh/), [Docker](https://www.docker.com/) и [Docker Compose](https://docs.docker.com/compose)

- Создать и перейти в директорию `bidaro`

```bash
mkdir bidaro && cd bidaro
```

- Клонировать [Docker](https://github.com/bidaro-open-source/docker), который позволит поднять все внешние сервисы для приложений

```
git clone git@github.com:bidaro-open-source/docker.git
```

- Клонировать [Bidaro](https://github.com/bidaro-open-source/bidaro) как основное приложение

```
git clone git@github.com:bidaro-open-source/bidaro.git
git checkout develop
```

- Клонировать [Bidaro migrator](https://github.com/bidaro-open-source/bidaro-migrator), который позволит настроить базу данных

```
git clone git@github.com:bidaro-open-source/bidaro-migrator.git
git checkout develop
```

- Копировать все `.env.example` в `.env`

```bash
cd docker && cp .env.example .env && cd ..
```

```bash
cd bidaro && cp .env.example .env && cd ..
```

```bash
cd bidaro-migrator && cp .env.example .env && cd ..
```

- Установить зависимости для `bidaro` и `bidaro-migrator`

```bash
cd bidaro && bun install && cd ..
```

```bash
cd bidaro-migrator && bun install && cd ..
```

- Запустить [Docker](https://docs.docker.com/config/daemon/start/)

```bash
sudo systemctl start docker
```

- Поднять все внешние сервисы

```bash
cd docker && sh shell start -d
```

- Запустить миграции

```bash
cd bidaro-migrator && bun run db && cd ..
```

- Запустить основное приложение

```bash
cd bidaro && bun dev
```
