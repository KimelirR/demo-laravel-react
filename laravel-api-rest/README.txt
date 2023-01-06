# Laravel Api Rest

[![Build Status](https://travis-ci.org/Tony133/laravel-api-rest.svg?branch=master)](https://travis-ci.org/Tony133/laravel-api-rest)

Simple example of a REST API with Laravel 9.x

## Install with Composer

```bash
    git clone https://github.com/ambrosekim/laravel-api-rest.git
```

## Change directory
```bash
    cd laravel-api-rest
```

> !Ensure you delete composer.lock file first

## Set Environment

```bash
    cp .env.example .env
```

## Set the application key

```bash
   php artisan key:generate && php artisan config:cache
```

## Run migrations and seeds

```bash
   php artisan migrate --seed
```

## Getting with Curl

```
    curl -H 'content-type: application/json' -H 'Accept: application/json' -v -X GET http://127.0.0.1:8000/api/books

    curl -H 'content-type: application/json' -H 'Accept: application/json' -v -X GET http://127.0.0.1:8000/api/books/:id

    curl -H 'content-type: application/json' -H 'Accept: application/json' -v -X POST -d '{"title":"Foo bar","price":"19.99","author":"Foo author","editor":"Foo editor"}' http://127.0.0.1:8000/api/books

    curl -H 'content-type: application/json' -H 'Accept: application/json' -v -X PUT -d '{"title":"Foo bar","price":"19.99","author":"Foo author","editor":"Foo editor"}' http://127.0.0.1:8000/api/books/:id

    curl -H 'content-type: application/json' -H 'Accept: application/json' -v -X DELETE http://127.0.0.1:8000/api/books/:id
```

## Pagination with Curl

```
    curl -H 'content-type: application/json' -H 'Accept: application/json' -v -X GET http://127.0.0.1:8000/api/books?page=:number_page  -u "email:password"
```

## User Authentication with Curl with middleware auth.basic.username **This uses Auth basic**

```
    curl -H 'content-type: application/json' -H 'Accept: application/json' -v -X GET http://127.0.0.1:8000/api/books -u "username:password"
```

## User Authentication with Curl using middleware auth.basic

```
    curl -H 'content-type: application/json' -H 'Accept: application/json' -v -X GET http://127.0.0.1:8000/api/books -u "email:password"
```

## Run App in container Docker with Laravel Sail 

```
docker run --rm \
    -u "$(id -u):$(id -g)" \
    -v $(pwd):/opt \
    -w /opt \
    laravelsail/php81-composer:latest \
    composer install --ignore-platform-reqs
```

## Run Start Application with Laravel Sail
```
  ./vendor/bin/sail up
```
