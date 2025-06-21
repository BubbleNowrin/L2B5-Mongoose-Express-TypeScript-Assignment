# 📚 Library Management API

A robust Library Management System built with **Express**, **TypeScript**, and **MongoDB (Mongoose)**. This API allows you to manage books and borrowing operations efficiently, with advanced features like inventory control, aggregation summaries, and comprehensive error handling.

## ✅ Features

- **Book Management:** Create, read, update, and delete books.
- **Borrowing System:** Borrow books with inventory checks and due dates.
- **Borrowed Summary:** Aggregated summary of borrowed books using MongoDB aggregation pipeline.
- **Filtering, Sorting, Limiting:** Retrieve books with flexible query options.
- **Schema Validation:** Enforced via Mongoose with clear error responses.
- **Mongoose Middleware:** Automatic availability updates and validation.
- **Custom Error Handling:** Consistent error responses for validation and API errors.
- **RESTful API Design:** Clean and predictable endpoints.

## 🚀 Tech Stack

- Node.js
- Express 5
- TypeScript
- MongoDB & Mongoose
- Postman (for API testing)

## 📂 Project Structure

```

.
├── .env
├── .gitignore
├── package.json
├── README.md
├── tsconfig.json
└── src
├── app.ts
├── server.ts
├── config
│ └── db.ts
├── errors
│ ├── ApiError.ts
│ └── pathNotFoundErrorHandler.ts
├── middlewares
│ └── error.middleware.ts
├── modules
│ ├── book
│ │ ├── book.controller.ts
│ │ ├── book.model.ts
│ │ ├── book.routes.ts
│ │ └── book.service.ts
│ └── borrow
│ ├── borrow.controller.ts
│ ├── borrow.model.ts
│ ├── borrow.routes.ts
│ └── borrow.service.ts
└── utils
└── apiResponse.ts

```

---

## 📦 API Endpoints

### 📘 Books

| Method | Endpoint         | Description                  |
| ------ | ---------------- | ---------------------------- |
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
| ------ | ------------- | ---------------------------------- |
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

```

5. **Validation Error Example**
   Send a negative number for `copies`:

```json
{
  "copies": -5
}
```

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

- Name: Nowrin Islam Mim
- Submission Date: Jun 21, 2025
