
---

# Jubilib 📚

**Jubilib** is a web-based library management system designed to simplify how users discover, borrow, and manage books. Built for small community libraries, schools, and independent readers, the app allows users to browse available titles, authors, genres, descriptions, and availability. Librarians can manage the inventory, update book records, and delete books.

---

## 🔑 Key Features

* 🔍 **Search Books** – Users can browse and search for books by Title or Id.
* ➕ **Add Books** – Librarians can add new books with details like title, author, genre, description, and image.
* 📝 **Update & Delete Records** – Book records can be edited or removed by the admin.
* 📦 **Inventory Management** – Admins can view and manage the full list of books in the system.

---

## 🛠 Tech Stack

* 🖥️ **Backend:** JavaScript, Node.js
* 🚏 **Framework:** Express.js
* ✅ **Validation:** Joi

---

## 🚀 Getting Started

To run Jubilib locally, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/JIBU-Library-Project/JUBI-Back-End.git
   cd jubilib
   ```
2. **Install dependencies**

   ```bash
   npm install
   ```
3. **Set up environment variables**
   Create a `.env` file in the root directory and add the following:

   ```
   PORT=3000
   ```
4. **Start the server**

   ```bash
   npm start
   ```

---

## 📡 API Endpoints

### 📚 Get All Books

* `GET /books`
* Retrieve all books in the library.
* ❌ No authentication required

---

### 📖 Get Book by ID

* `GET /books/:id`
* Retrieve details of a specific book.
* ❌ No authentication required

---

### 🔍 Search Books

* `GET /books/search/:query`
* Search for books by title or ID.
* ❌ No authentication required

---

### ➕ Add New Book

* `POST /books`
* Add a new book to the collection.
* ❌ No authentication required (admin-only access)
* **Request Body:**

  ```json
  {
    "title": "string",
    "author": "string",
    "genre": "string",
    "description": "string",
    "image": "string",
    "availability": true
  }
  ```

---

### 📝 Update Book

* `PUT /books/:id`
* Update selected fields of a book.
* ❌ No authentication required (admin-only access)
* **Request Body (partial updates allowed):**

  ```json
  {
    "title": "New Title",
    "availability": false
  }
  ```

---

### ❌ Delete Book

* `DELETE /books/:id`
* Delete a book from the system.
* ❌ No authentication required (admin-only access)

---

