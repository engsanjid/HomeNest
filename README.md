# 🏡 HomeNest – Real Estate Platform (Next.js + Firebase Auth)

HomeNest is a modern real-estate web application built with **Next.js (App Router)**,  
**Firebase Authentication**, and a custom backend API.  
Users can browse properties, view details, add their own listings, and manage them through protected pages.

Live Demo 👉 https://home-nest-beta.vercel.app/

---

## 🚀 Features

### 🌐 Public Pages
- Beautiful **Landing Page** with 7 sections
- Responsive Navbar with routes
- Properties Listing Page (grid of cards)
- Property Details Page
- User Reviews & Testimonials
- Clean Footer with social links

### 🔐 Authentication
- Email/Password registration
- Login with Google (Firebase Auth)
- Client-side token stored in cookies

### 🔒 Protected Pages
Accessible only after login:

- **Add Property**
- **My Properties**
- **My Ratings**
- Delete & Update Properties
- View individual property details

---

## 🛠️ Tech Stack

### Frontend:
- **Next.js (App Router)**
- **React**
- **Firebase Authentication**
- **Tailwind CSS**
- **DaisyUI**
- **SweetAlert2**
- **React Hot Toast**

## 🔗 Backend (Server)

The backend for this project is built with Node.js and Express, and is deployed separately.

👉 Server Live API: https://homenest-server-nine.vercel.app/  
👉 GitHub Repository: https://github.com/engsanjid/homeNest-server-side

### ⚙️ Backend Features
- RESTful API for properties
- JWT Authentication
- CRUD operations (Add, Update, Delete properties)
- User-specific data handling
````
src/
├── app/
│ ├── home/ # Homepage sections
│ ├── login/ # Login page + form
│ ├── register/ # Registration page
│ ├── my-properties/ # Protected page
│ ├── my-ratings/ # Protected page
│ ├── add-property/ # Protected page
│ ├── details/[id]/ # Property details
│ ├── firebase/
│ │ └── firebase.init.js
│ ├── context/AuthProvider.jsx
│ ├── layout.jsx
│ └── page.jsx
├── components/
├── styles/
└── .env.local

```

