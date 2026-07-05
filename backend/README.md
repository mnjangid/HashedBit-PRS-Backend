# Product Review System - Backend

A RESTful backend API for the Product Review System built using Node.js, Express.js, and MySQL. This backend provides complete CRUD operations for managing product reviews along with request validation using Zod.

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MySQL
- mysql2
- Zod
- dotenv
- CORS

---

## ✨ Features

- RESTful API
- Create Review
- Get All Reviews
- Get Review by ID
- Update Review
- Delete Review
- Request Validation using Zod
- MySQL Database Integration
- Environment Variable Support
- Proper HTTP Status Codes
- Error Handling

---

## 📂 Project Structure

```
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   └── reviewController.js
│
├── middlewares/
│   └── validateReview.js
│
├── routes/
│   └── reviewRoutes.js
│
├── validations/
│   └── reviewValidation.js
│
├── .env
├── .env.example
├── server.js
├── package.json
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Navigate to the project

```bash
cd backend
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

Create a `.env` file in the project root.

Example:

```env
PORT=5000

DB_HOST=localhost
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=prs_db
DB_PORT=3306
```

---

### 5. Start the server

```bash
node server.js
```

Server runs on

```
http://localhost:5000
```

---

## 📦 Environment Variables

| Variable | Description |
|----------|-------------|
| PORT | Server Port |
| DB_HOST | MySQL Host |
| DB_USER | MySQL Username |
| DB_PASSWORD | MySQL Password |
| DB_NAME | Database Name |
| DB_PORT | MySQL Port |

---

## 🗄️ Database

Create a database named:

```sql
prs_db
```

Create the following table:

```sql
CREATE TABLE Product_Review (
    review_id INT PRIMARY KEY AUTO_INCREMENT,
    product_id INT NOT NULL,
    user_id INT NOT NULL,
    username VARCHAR(255) NOT NULL,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    review_text VARCHAR(1000),
    review_date DATE DEFAULT (CURRENT_DATE),
    status ENUM('Visible','Hidden','Reported') DEFAULT 'Visible',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP
);
```

---

## 📌 API Endpoints

### Get All Reviews

```
GET /reviews
```

---

### Get Review By ID

```
GET /reviews/:id
```

---

### Create Review

```
POST /reviews
```

Example Body

```json
{
    "product_id": 101,
    "user_id": 1,
    "username": "John Doe",
    "rating": 5,
    "review_text": "Excellent product",
    "status": "Visible"
}
```

---

### Update Review

```
PUT /reviews/:id
```

---

### Delete Review

```
DELETE /reviews/:id
```

---

## ✅ Validation

The backend validates incoming requests using **Zod**.

Validated Fields:

- Product ID
- User ID
- Username
- Rating (1–5)
- Review Text
- Status

Invalid requests return descriptive validation errors.

---

## 📦 Dependencies

```bash
npm install express mysql2 dotenv cors zod
```

---

## 📸 Current Functionality

- MySQL Connection Pool
- Express Server
- CRUD APIs
- Request Validation
- RESTful Routing
- Error Handling
- Environment Variables
- Database Connectivity

---

## 🔗 Frontend Repository

https://github.com/mnjangid/HashedBit-PRS-frontend.git


---

## 👨‍💻 Author

**Manmohan Jangid**