# books-back

Back-end for Books, an event management solution.

## About

Books is an application with which you can manage and register your books.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. To run in development
```bash
npm run dev
```

## Routes

```
POST: /store-author
Body: { "name": "Koe" }
```

```
POST: /store-books
Body: { "name": "Diario de pricesas 5", "authorId": "1"}
```

```
GET: /books/:id
Body: {}
```

```
DELETE: /books/:id
Body: {}
```


```
PUT: /books/:id
Body: { "name": "Diario de pricesas 5", "authorId": "1", "active": "false"}
```
