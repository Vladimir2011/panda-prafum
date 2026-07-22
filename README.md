# PandaParfum

Frontend интернет-магазина парфюмерии на Nuxt 4, Vue 3, TypeScript и Tailwind CSS.

Проект пока не подключён к backend. Каталог, корзина, избранное и оформление заказа будут работать через типизированный frontend-слой данных, который позже можно заменить реальным API.

## Требования

- Node.js 22+
- pnpm 10+

```bash
nvm use
corepack enable
pnpm install
```

## Локальная разработка

Скопируйте пример переменных окружения:

```bash
cp .env.example .env
```

Запустите dev-сервер:

```bash
pnpm dev
```

По умолчанию приложение доступно на `http://localhost:3000`.

## Команды

| Команда             | Назначение                                   |
| ------------------- | -------------------------------------------- |
| `pnpm dev`          | Dev-сервер с HMR                             |
| `pnpm build`        | Production SSR-сборка                        |
| `pnpm generate`     | Статическая генерация                        |
| `pnpm preview`      | Просмотр production-сборки                   |
| `pnpm format`       | Форматирование Prettier                      |
| `pnpm format:check` | Проверка форматирования без изменения файлов |
| `pnpm lint`         | Проверка ESLint                              |
| `pnpm lint:fix`     | Безопасные автоисправления ESLint            |
| `pnpm typecheck`    | Проверка TypeScript и Vue                    |
| `pnpm test`         | Vitest в watch-режиме                        |
| `pnpm test:run`     | Однократный запуск тестов                    |

## Структура

```text
app/
  assets/       глобальные стили и дизайн-токены
  components/   переиспользуемые Vue-компоненты
  layouts/      каркас страниц
  pages/        маршруты Nuxt
tests/          unit и component-тесты
public/         статические публичные файлы
```

По мере развития проекта добавятся `app/composables`, `app/types`, `app/utils`, `app/stores` и типизированный слой fixtures/API. Папки создаются только когда в них появляется реальная ответственность.

## SEO

Подключён `@nuxtjs/seo`:

- canonical URL и общая конфигурация сайта;
- `robots.txt` с безопасным отключением индексации вне production;
- `sitemap.xml`;
- Schema.org identity и page-level JSON-LD;
- SSR meta-теги через `useSeoMeta`;
- `noindex` для корзины, оформления заказа, избранного и поиска.

Перед production-деплоем обязательно задайте:

```dotenv
NUXT_SITE_URL=https://your-domain.example
NUXT_SITE_INDEXABLE=true
```

Не включайте индексацию preview/staging-окружений.

## CI и GitHub

Workflow `.github/workflows/ci.yml` проверяет форматирование, lint, типы, тесты и production build для pull request и push в `main`. Dependabot еженедельно проверяет npm-зависимости и GitHub Actions.

Перед push выполните:

```bash
pnpm format:check
pnpm lint
pnpm typecheck
pnpm test:run
pnpm build
```
