# KeenKeeper

## 📌 Project Overview
KeenKeeper is a modern data-driven web application built with **Next.js** that fetches and displays dynamic data in interactive cards. Users can explore detailed views of each card and perform actions like **Call, Video, and Text**, with real-time feedback and contextual information.

The app also includes timeline tracking, filtering options, analytics via charts, and robust routing with error handling.

🔗 **Live Demo:** https://ph-assignment-7-gw8u.vercel.app/

---

## 🚀 Technologies Used
- Next.js (App Router)
- React.js
- Tailwind CSS
- DaisyUI
- React Icons
- React Toastify
- Recharts
- Context API
- Vercel (Deployment)

---

## ⭐ Key Features

### 1. Dynamic Card Data System
- Fetches and displays data in responsive cards
- Clicking a card opens a detailed view page
- Detail page includes **Call, Video, and Text actions**
- Each action triggers dynamic toast notifications (e.g., “Murad calling…”)

---

### 2. Timeline with Filtering
- Dedicated **Timeline route**
- Displays activity history with:
  - Name
  - Photo
  - Date & Time
- Built-in **filter system** (e.g., show only Call activities)

---

### 3. Analytics & Route System
- Separate **Stats page**
- Displays **Pie Charts using Recharts**
- Fully structured routing system using Next.js App Router
- Includes:
  - Dynamic routes
  - 404 Not Found page
  - `error.jsx` global error handling page

---

## 🧠 Additional Highlights
- Context API for global state management
- Real-time date and time display in timeline
- Clean UI with TailwindCSS + DaisyUI
- Fully responsive design
- Toast feedback for user interactions
- Deployed on Vercel

---

## 📂 Pages Overview
- `/` – Home (Data Cards)
- `/details/[id]` – Card Details Page
- `/timeline` – Activity Timeline with filters
- `/stats` – Analytics dashboard (Pie charts)
- `404` – Custom Not Found Page
- `error.jsx` – Global error handler

---

## 📦 Deployment
Hosted on **Vercel** for fast and scalable performance.

---

## 👨‍💻 Author
KeenKeeper Project – Built with Next.js and modern React ecosystem.