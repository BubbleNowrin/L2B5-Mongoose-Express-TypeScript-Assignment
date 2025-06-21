```markdown
# 📚 Library Management API (Assignment 3)

A Library Management System built using **Express**, **TypeScript**, and **MongoDB (Mongoose)**.

## ✅ Features

- 📖 Create, Read, Update, Delete (CRUD) books
- 📦 Borrow books with business logic (inventory control)
- 📊 Borrowed summary using MongoDB Aggregation Pipeline
- ✅ Schema validation
- 🔁 Mongoose middleware
- ⚙️ Static & instance methods
- 🔎 Filtering, sorting, limiting
- ⚠️ Custom validation error responses (assignment format)

---

## 🚀 Tech Stack

- Node.js
- Express 5
- TypeScript
- MongoDB + Mongoose
- Postman (for testing)

---

## 📂 Project Structure

```

src/
├── app.ts
├── server.ts
├── config/
│   └── db.ts
├── controllers/
│   ├── book.controller.ts
│   └── borrow\.controller.ts
├── models/
│   ├── book.model.ts
│   └── borrow\.model.ts
├── routes/
│   ├── book.routes.ts
│   └── borrow\.routes.ts
├── services/
│   ├── book.service.ts
│   └── borrow\.service.ts
├── middlewares/
│   └── error.middleware.ts
├── utils/
│   └── apiResponse.ts
.env

```

---

## 📦 API Endpoints

### 📘 Books

| Method | Endpoint         | Description                  |
|--------|------------------|------------------------------|
| POST   | `/api/books`     | Create a new book            |
| GET    | `/api/books`     | Get all books (filter, sort) |
| GET    | `/api/books/:id` | Get book by ID               |
| PUT    | `/api/books/:id` | Update a book                |
| DELETE | `/api/books/:id` | Delete a book                |

#### 🔍 Filtering, Sorting, Limiting

```

GET /api/books?filter=FANTASY\&sortBy=createdAt\&sort=desc\&limit=5

```

### 📕 Borrow

| Method | Endpoint      | Description                        |
|--------|---------------|------------------------------------|
| POST   | `/api/borrow` | Borrow a book (enforces logic)     |
| GET    | `/api/borrow` | Borrowed summary using aggregation |

---

## 🧪 How to Test (Postman)

1. **Create Book**

```

POST /api/books

```

2. **Get All Books**

```

GET /api/books?filter=SCIENCE\&sort=desc\&limit=5

```

3. **Borrow Book**

```

POST /api/borrow

```

4. **Borrow Summary**

```

GET /api/borrow

````

5. **Validation Error Example**

Send a negative number for `copies`:

```json
{
  "copies": -5
}
````

You’ll get the exact structure:

```json
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "copies": {
        "message": "Copies must be a positive number",
        "name": "ValidatorError",
        "properties": {
          "message": "Copies must be a positive number",
          "type": "min",
          "min": 0
        },
        "kind": "min",
        "path": "copies",
        "value": -5
      }
    }
  }
}
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/library-management-api.git
cd library-management-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env`

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/library-db
```

### 4. Start the server

```bash
npm run dev
```

---

## 👩‍💻 Author

* Name: Nowrin Islam Mim
* Submission Date: Jun 21, 2025

```

```
