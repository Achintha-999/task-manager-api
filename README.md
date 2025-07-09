# 📝 Task Manager API

**Task Manager API** is a lightweight RESTful service built using **Node.js**, **Express**, and **Sequelize**, designed to manage your tasks with seamless CRUD operations.

---

## 🚀 Features

- ✅ Create, read, update, and delete tasks  
- 🗃️ SQLite database integration  
- 🔧 Sequelize ORM for smooth data handling

---

## 📦 Prerequisites

Make sure you have the following installed:

- 🟢 Node.js (v14 or higher)  
- 📦 npm (v6 or higher)

---

## 🛠️ Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Achintha-999/task-manager-api
   cd task-manager-api
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run database migrations**:
   ```bash
   npx sequelize-cli db:migrate
   ```

---

## ▶️ Usage

1. **Start the server**:
   ```bash
   node server.js
   ```

2. The server will run at: [http://localhost:3000](http://localhost:3000)

3. **API Endpoints**:

   | Method | Endpoint      | Description                    |
   |--------|---------------|--------------------------------|
   | GET    | `/tasks`      | Retrieve all tasks             |
   | POST   | `/tasks`      | Create a new task              |
   | GET    | `/task`       | Retrieve a single task         |

---

## 🗂️ Project Structure

```
├── config/
│   └── config.json       # Database configuration
├── database.sqlite       # SQLite database file
├── migrations/           # Sequelize migrations
├── models/
│   ├── index.js          # Model initialization
│   └── task.js           # Task model
├── seeders/              # Sequelize seeders (optional)
├── server.js             # Main server file
└── package.json          # Project metadata and dependencies
```

---

## 📚 Dependencies

- 🌐 **Express** – Web framework for Node.js  
- 📘 **Sequelize** – Promise-based ORM for Node.js  
- 🪶 **SQLite3** – Lightweight and fast database engine

---

