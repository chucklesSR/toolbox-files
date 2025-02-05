
# toolbox-files
Full Stack Code Challenge for Toolbox

This project contains a backend developed in Node.js and a frontend created with React. Both services are configured to run using Docker Compose.

## 🛠️ Project Structure

project-root/

├── backend/

└── frontend/

## 🚀 Instructions to Start the Project

### 1. Clone the repository

```bash
git clone <repository-url>
cd project-root
```

### 2. Start the containers

```bash
docker-compose up --build
```

### 3. Access the applications

Frontend (React): http://localhost:3000

Backend (Node.js): http://localhost:3001

## Run tests

### 1. Frontend

```bash
cd frontend
nvm use
npm test
```

### 2. Backend

```bash
cd backend
nvm use
npm test
```
