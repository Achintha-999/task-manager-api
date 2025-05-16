# Task Manager API

Task Manager API is a simple RESTful API built with Node.js, Express, and Sequelize. It allows you to manage tasks with basic CRUD operations.

## Features

- Create, read, update, and delete tasks.
- Uses SQLite as the database.
- Sequelize ORM for database interaction.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd task-manager-api

2. Install dependencies:
  npm install

3. Run database migrations:
  npx sequelize-cli db:migrate

Usage

1. Start the server:
node server.js

2. The server will run on http://localhost:3000.

3. Use the following endpoints to interact with the API:

GET /tasks: Retrieve all tasks.
POST /tasks: Create a new task. Send a JSON body with title, description, and completed fields.
GET /task: Retrieve a single task.

Project Structure

config/
  config.json       # Database configuration
database.sqlite     # SQLite database file
migrations/         # Sequelize migrations
models/             # Sequelize models
  index.js          # Model initialization
  task.js           # Task model
seeders/            # Sequelize seeders (if any)
server.js           # Main server file
package.json        # Project metadata and dependencies

Dependencies
Express - Web framework for Node.js
Sequelize - ORM for Node.js
SQLite3 - Lightweight database engine