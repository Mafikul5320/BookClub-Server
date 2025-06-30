# 📚 Book Club – Server

This is the backend/server-side code for the **Book Club** project. It handles all the API endpoints, authentication, user data, and group data using Node.js, Express, and MongoDB.

---

## 🚀 Features

- User registration & authentication (with Firebase)
- CRUD operations for Book Groups
- RESTful API endpoints
- MongoDB database integration
- JWT support (optional)
- CORS enabled
- Clean and scalable folder structure

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **Firebase Auth (client-side)**
- **dotenv**
- **cors**

---

## 📦 Dependencies

| Package     | Purpose                          |
|-------------|----------------------------------|
| express     | Backend web framework            |
| mongoose    | MongoDB object modeling          |
| cors        | Enable cross-origin requests     |
| dotenv      | Load environment variables       |
| nodemon     | Auto-restart during development  |

---

## 🧪 API Endpoints (Sample)

| Method | Endpoint            | Description               |
|--------|---------------------|---------------------------|
| GET    | `/groups`           | Get all book groups       |
| POST   | `/groups`           | Create a new book group   |
| GET    | `/groups/:id`       | Get group details by ID   |
| DELETE | `/groups/:id`       | Delete group by ID        |
| PUT    | `/groups/:id`       | Update group info         |
| GET    | `/users`            | Get all users             |
| POST   | `/users`            | Register/save a user      |

---

## ⚙️ Getting Started Locally

### ✅ Prerequisites

- Node.js installed (v16+)
- Server URI : https://assignment-10-server-woad-two.vercel.app
- Git installed

### 🔧 Setup Steps

```bash
# 1. Clone the repository
git clone https://github.com/your-username/bookclub-server.git

# 2. Go into the project folder
cd bookclub-server

# 3. Install the dependencies
npm install

# 4. Create a .env file
touch .env

# Normal run
npx nodemon index.js
