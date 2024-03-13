# Simple HTTP server

> [!NOTE]  
> Please disable any AI code-assistant you might have in your IDE

Goal of this test is to create simple HTTP application that handles user management.
You can use any HTTP server you like, like Express, Fastify, etc.

You have a JSON file at [`users.json`](users.json) that contains data about our app.
User is identified by a numerical unique id.

You need to write three routes:

1. GET `/users` that lists the users
2. GET `/users/:id` that returns the user of id `:id`
3. POST `/users` that creates a new user (automatically generates the id)