---
title: Proyecto TFC
author: Álvaro Sánchez Fernández
date: 06/03/2014
---

# TFC - Trabajo Final de Ciclo

<p align="center">
    <img src="https://laravel.com/assets/img/components/logo-laravel.svg">
    <img height="65px" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.e1-IPU2gjdsmUK38abfEZAHaEK%26pid%3DApi&f=1&ipt=b9b3f0172f58f7be144a46fa910f0a9397c368d3da96432cfc2aed095aac6459&ipo=images">
</p>


#### Instructions
```
# Clonar el repositorio
$ git clone https://github.com/fewerfuture/TFC.git

# Instalar las dependencias de Composer
$ composer install

# Poblar el archivo .env con tus credenciales de base de datos, "Api key" y "Map ID"
$ cp .env.example .env 

# Instalar dependencias de npm
$ npm install && npm run watch

# Migrar las tablas de la base de datos y poblarlas con registros falsos
# php artisan migrate --seed

```