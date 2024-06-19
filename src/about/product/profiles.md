# Профили

Аутентифицированный пользователь имеет свой личный кабинет, который отражает текущее состояние аккаунта.

## Основное положение

Личный кабинет пользователя состоит из личных данных, статуса аккаунта, статуса своих лотов или торгов, а так же имеет формы для изменения ряда своих данных и контроля активных сессий.

## Настройки

На странице настроек аккаунта будут доступны следующие формы:

- Форма изменения публичных данных: `имя`, `фамилия` и `аватар`. Пользователь может спокойно их изменить в любой момент времени, без ограничений.

- Форма изменения почты. На новую почту отправиться ссылка, переход по которой подвтердит новую почту.

- Форма верефикации почты. Если пользователь все еще не подтвердил почту, а старая ссылка не пришла, он может вручную отправить ссылку.

## Процесс верификации

Со стороны сервера создается токен без ограничения на время и с привязкой к пользователю. Он отправляется на почту аккаунта в виде ссылки, переход по которой позволяет успешно верифицировать почту.