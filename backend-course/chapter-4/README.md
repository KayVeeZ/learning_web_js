# 📝 Todo App - Dockerized Backend with Auth

A full-featured Todo application built with **Node.js**, **Express.js**, **Prisma**, **PostgreSQL**, and **Docker**, featuring **JWT authentication**. This guide provides a detailed overview of the project, setup instructions, and usage tips.

---

## 🚀 Overview

This is a secure, containerized backend for a Todo application that includes user authentication and protected routes. Users can:

- **Register** a new account
- **Login** and receive a **JWT token**
- **Manage their todos** with full **CRUD** operations—only accessible when authenticated

**Tech Stack:**

- **Node.js + Express.js** – REST API
- **Prisma ORM** – Database access
- **PostgreSQL** – Persistent data storage
- **JWT + bcrypt** – Authentication and password hashing
- **Docker** – Containerized environment for easy setup

---

## 📁 Project Structure


```
backend-todo-app/
│
├── public/                         # Static frontend HTML for login & todo UI
│   └── index.html
│
├── prisma/                         # Prisma ORM configuration
│   ├── schema.prisma               # Database schema definition
│   └── migrations/                 # Auto-generated DB migration files
│
├── src/                            # Core backend logic
│   ├── controllers/                # (Optional) Route handler logic (can grow over time)
│   ├── middlewares/                # Express middlewares
│   │   └── authMiddleware.js       # JWT authentication middleware
│   ├── routes/                     # API route handlers
│   │   ├── authRoutes.js           # Registration & login routes
│   │   └── todoRoutes.js           # Auth-protected todo CRUD routes
│   ├── prismaClient.js             # Initializes Prisma client
│   └── server.js                   # Main entry point: sets up app, routes, and middleware
│
├── .env                            # Environment variables (not committed to version control)
├── Dockerfile                      # Instructions for building the backend Docker image
├── docker-compose.yaml             # Runs app + PostgreSQL together in containers
├── package.json                    # Node.js dependencies and app scripts
├── package-lock.json               # Auto-generated lock file for exact dependency versions
└── todo-app.rest                   # REST client file to test the API from VS Code
```

---

## 🛠️ Getting Started

### 1. Prerequisites

- Install [Docker Desktop](https://www.docker.com/products/docker-desktop)
- Install [Node.js](https://nodejs.org/) (if running parts locally)

### 2. Clone the Repository

```bash
git clone https://github.com/your-username/backend-todo-app.git
cd backend-todo-app
```

### 3. Generate Prisma Client

```bash
npx prisma generate
```

### 4. Build Docker Images

```bash
docker compose build
```

### 5. Run Migrations

```bash
docker compose run app npx prisma migrate dev --name init
# OR (for production-style deploys)
docker compose run app npx prisma migrate deploy
```

### 6. Start the App

```bash
docker compose up
# Or to run in background:
docker compose up -d
```

### 7. Connect to PostgreSQL (Optional)

```bash
docker exec -it postgres-db psql -U postgres -d todoapp
```

### 8. Stop and Clean Up

```bash
docker compose down           # Stop all containers
docker system prune           # Remove unused containers/images
```

---

### 🌐 Access the App

Once running, open:

```arduino
http://localhost:5003
```
*(Port may vary depending on your setup—check `docker-compose.yaml`)*

---

### 🔌 Testing with REST Client

Use the included `todo-app.rest` file with the REST Client extension in VS Code to send API requests directly.

## Available requests

- **Register a User** – POST /api/auth/register
- **Login a User** – `POST /api/auth/login`→ receive JWT
- **Get Todos** – `GET /api/todos` *(JWT required)*
- **Add Todo** – `POST /api/todos` *(JWT required)*
- **Update Todo** – `PUT /api/todos/:id` *(JWT required)*
- **Delete Todo** – `DELETE /api/todos/:id` *(JWT required)*