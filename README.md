# 📖 Quran Web Application

A modern and responsive Quran web application built with **Next.js**, **Tailwind CSS**, and public Quran APIs.
Users can explore Surahs, read Ayahs with translation, and customize Arabic font settings.

---

## 🚀 Live Demo

👉 https://quran-app-dusky.vercel.app/

## 📂 GitHub Repository

👉 https://github.com/shagormahamud93/quran-app

---

## ✨ Features

* 📚 **Surah List Page**

  * Displays all 114 Surahs
  * Shows Arabic & English names

* 📖 **Ayah Details Page**

  * View full Surah with Arabic text
  * English translation alongside

* 🔍 **Search Functionality**

  * Search Ayahs by translation text
  * Fast filtering with instant results

* ⚙️ **Settings Panel (Sidebar)**

  * ✅ Arabic Font Size control (A- / A+)
  * ✅ Arabic Font Style selection (Amiri, Scheherazade)
  * ✅ Settings saved in **localStorage**

* 📱 **Responsive Design**

  * Mobile-friendly sidebar with toggle
  * Works smoothly across all devices

---

## 🛠 Tech Stack

* **Frontend:** Next.js (App Router, SSG)
* **Styling:** Tailwind CSS
* **API:** Al Quran Cloud API
* **State:** React Hooks (useState, useEffect)

---

## ⚡ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/shagormahamud93/quran-app.git
cd quran-app
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the development server

```bash
npm run dev
```

Open 👉 http://localhost:3000

---

## 📁 Project Structure

```
src/
 ├── app/
 │   ├── page.tsx          # Home (Surah list)
 │   ├── search/           # Search page
 │   └── surah/[id]/       # Surah details
 │
 ├── components/
 │   ├── Sidebar.tsx
 │   ├── SurahCard.tsx
 │   └── AyahCard.tsx
 │
 ├── utils/
 │   └── api.ts
```

---

## 🎯 Key Highlights

* Clean and modern UI
* Fully responsive layout
* Dynamic Arabic font customization
* Optimized API data fetching
* Simple and maintainable code structure

## 🎥 Demo Video

👉 https://drive.google.com/file/d/1btvoubQAX16bkf1vIX_eVAjwY8EGnJMp/view?usp=sharing

---

⭐ If you like this project, feel free to give it a star!
