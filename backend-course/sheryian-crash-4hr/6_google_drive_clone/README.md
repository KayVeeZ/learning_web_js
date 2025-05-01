# 🚀 Google Drive Clone – Node.js + Express

A secure, full-stack **Google Drive–like web app** built with **Node.js**, **Express**, **MongoDB**, **JWT**, and **Filebase** for cloud file storage. Each user can securely upload, view, download, and delete **their own files** using an elegant **drag-and-drop interface**.

---

## 🌟 Features

- 🔒 **User Authentication**
  - JWT (JSON Web Token) based authentication
  - Only users can access their own files

- 📁 **Drag-and-Drop File Upload**
  - Modern drag-and-drop interface
  - No page reload required
  - Real-time feedback and preview

- ☁️ **Filebase Storage**
  - S3-compatible uploads via Filebase
  - Cloud storage integration, not local

- 🧠 **MongoDB Integration**
  - Stores user data and file metadata

- 📦 **File Operations**
  - Upload, view, download, delete

---

## 🛠️ Tech Stack

| Layer        | Tech Used                            |
|--------------|--------------------------------------|
| Backend      | Node.js, Express.js                  |
| Auth         | JWT (JSON Web Token)                 |
| Database     | MongoDB                              |
| Storage      | Filebase (S3-compatible)             |
| Frontend     | HTML, TailwindCSS, Flowbite          |
| UX Features  | Drag-and-drop, modal popups, toast   |

---

## 📦 Folder Structure

```
.
├── routes/
│   └── fileRoutes.js
├── models/
│   └── User.js
│   └── File.js
├── controllers/
│   └── fileController.js
├── middleware/
│   └── auth.js
├── public/
│   └── main.css
├── views/
│   └── index.ejs
├── app.js
├── .env
└── README.md
```

---

## 🔐 Environment Variables (.env)

```env
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
FILEBASE_KEY=your-filebase-access-key
FILEBASE_SECRET=your-filebase-secret
FILEBASE_BUCKET=your-bucket-name
```

---

## ✅ Getting Started

1. **Install Dependencies**

```bash
npm install
```

2. **Set Environment Variables**

Create a `.env` file as described above.

3. **Run the App**

```bash
npm run dev
```

Then visit: `http://localhost:3000`

---

## 🎯 Highlights

- 🌐 Clean UI with dark mode
- 💾 Cloud file storage via Filebase
- 🔐 User access control with JWT
- 🧲 Intuitive drag-and-drop upload
- 📥 Download & delete for own files

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
