## webApp

Il tema -> un’app di libri in cui si potranno lasciare recensioni libere

## Backend
Todos:
[x] Create db on Workbench
    - 2 table to create - db name: web_app_books
        - books
        - reviews

### Create express server
**deps**
    - Express
    - mysql2 (per fare la connessione al db)

**todos**
- [] create a basic express server with an initial '/' endpoint
- [] create an env file to store credentials
- [] add git ignore
- [] update the package. json scripts section to use --watch --env-file
- [] create db connection in database/connections.js
- [] create an index route to show a list of books from the db
- [] create an show route to show the single book (with reviews attached)
- [] create postman collection and test the endpoints
- [] create an express Router for the /api/books and api/books/:id
- []create a controller
- [] create server error middleware and not found


## Frontend
