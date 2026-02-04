# 🐾 Pawsitive – Pet Care Management Platform (Frontend)

This repository contains the **frontend application** for **Pawsitive**, a pet care management platform designed to help pet owners manage pet profiles, health records, and care activities through a modern and responsive web interface.

This README represents a **final frontend code documentation**, structured according to **industry best practices**, suitable for **project review, portfolio, and real-world usage**.

---

## 📌 Project Objective

The objective of **Pawsitive** is to build a clean, scalable, and user-friendly frontend that:

* Dashboard for pet management and stats
* Manages pet profiles and related care data
* Supports CRUD operations through API integration
* Provides a responsive and intuitive UI
* Follows component-based architecture
* Is easy to maintain and extend

> This repository contains **frontend only**.
> Backend services are integrated via REST APIs.

---

## 🛠️ Tech Stack

| Technology               | Purpose                       |
| ------------------------ | ----------------------------- |
| **React.js**             | UI library                    |
| **Vite**                 | Fast development & build tool |
| **JavaScript (ES6+)**    | Application logic             |
| **React Hooks**          | State & lifecycle handling    |
| **Axios / Fetch**        | API communication             |
| **CSS / Tailwind / MUI** | Styling (as used in project)  |
| **Git & GitHub**         | Version control               |

---

## ✨ Core Features

### 🐶 Pet Management

* Add new pet profiles
* Edit pet details
* Delete pets
* View pet list

### 🩺 Health Records

* Track health-related data for pets
* Update health information
* Delet health oppointment

### 🩺 Pet Feeding

* Add feeding timing and food for pets
* Update feeding information
* Delet feeding info

### 📋 Reminders

* Add reminders for pet activities
* Update reminder information
* Delet reminder after compeletion 

### 📱 Responsive UI

* Mobile-friendly layouts
* Clean and accessible design
* Consistent component styling

---

## 🧱 Application Architecture

The application follows a **component-based React architecture** with **clear separation of concerns**:

* Pages routing is protected from Login
* Pages handle routing and layout
* Components are reusable and isolated
* Services manage API calls
* State is managed locally via React hooks

This approach ensures:

* Scalability
* Reusability
* Clean codebase
* Easy debugging and testing

---

## 📁 Project Structure

```
pet-care-app-frontend/
├── public/
│   └── index.html
│
├── src/
│   ├── assets/              # Images, icons, static files
│   │
│   ├── components/          # Reusable UI components
│   │   ├── PetBlog.jsx
│   │   ├── ROpetCard.jsx
│   │   └── ROpetGrid.jsx
│   │
│   ├── features/         # Forms for add/update actions
│   │   ├── actionForms
│   │   │   ├── PetBlog.jsx
│   │   │   ├── ROpetCard.jsx
│   │   │   └── ROpetGrid.jsx
│   │   │
│   │   ├── auth
│   │   │   ├── PetBlog.jsx
│   │   │   ├── ROpetCard.jsx
│   │   │   └── ROpetGrid.jsx
│   │   │
│   │   ├── dashboard
│   │   │   ├── PetBlog.jsx
│   │   │   ├── ROpetCard.jsx
│   │   │   └── ROpetGrid.jsx
│   │   │
│   │   ├── detailsPet
│   │   │   ├── PetBlog.jsx
│   │   │   ├── ROpetCard.jsx
│   │   │   └── ROpetGrid.jsx
│   │   │
│   │   └── pets
│   │   │   ├── PetBlog.jsx
│   │   │   ├── ROpetCard.jsx
│   │   │   └── ROpetGrid.jsx
│   │   │   └── ROpetGrid.jsx
│   │
│   ├── routes/         # Forms for add/update actions
│   │   ├── AddHealthForm.jsx
│   │   ├── AddPetForm.jsx
│   │   └── ...
│   │  
│   ├── sections/         # Forms for add/update actions
│   │   ├── AddHealthForm.jsx
│   │   ├── AddPetForm.jsx
│   │   └── ...
│   │
│   ├── pages/               # Page-level components
│   │   ├── Dashboard.jsx
│   │   ├── Pets.jsx
│   │   ├── Health.jsx
│   │   └── ...
│   │
│   ├── services/            # API service layer
│   │   ├── petService.js
│   │   ├── healthService.js
│   │   └── ...
│   │
│   ├── styles/              # Global and component styles
│   │
│   ├── routes.jsx           # routes
│   ├── App.jsx              # Root component
│   └── main.jsx             # Application entry point
│
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

### Why this structure works

* Clear separation between **UI, logic, and services**
* Scalable for adding new features
* Easy onboarding for new developers
* Follows modern React best practices

---

## 🔗 API Integration

The frontend communicates with backend APIs via a dedicated **service layer**.

### Example Responsibilities:

* Fetch pet list
* Add / update / delete pets
* Manage health records

```js
services/
├── petService.js
├── healthService.js
```

This ensures:

* Clean components
* Centralized API logic
* Easy backend replacement or upgrade

---

## ⚙️ Setup & Installation

### Prerequisites

* Node.js (v16 or higher)
* npm or yarn

### Installation Steps

```bash
git clone https://github.com/vickysrana2-cloud/pet-care-app-frontend.git
cd pet-care-app-frontend
npm install
```

### Run the Application

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## 🌍 Environment Configuration

Create a `.env` file if backend requires configuration:

```
VITE_API_BASE_URL=http://localhost:8080
```

---

## 🚀 Performance Considerations

* Component reusability reduces DOM re-renders
* API calls isolated in services
* Conditional rendering for better UX
* Lightweight build using Vite

---

## 🔮 Future Enhancements

* Authentication & authorization
* Role-based access
* Appointment scheduling
* Notifications & reminders
* Unit & integration testing

---

## 👨‍💻 Author

**Vicky Rana**
Frontend Developer

GitHub:
👉 [https://github.com/vickysrana2-cloud](https://github.com/vickysrana2-cloud)


