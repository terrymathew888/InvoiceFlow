# 📧 InvoiceFlow - Invoice Management System

[![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)](https://vuejs.org/)
[![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)](https://firebase.google.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A modern, responsive invoice management web application built with Vue.js 3 and Firebase. Create, edit, manage, and track invoices with an intuitive user interface and real-time data synchronization.

## 📝 Description

InvoiceFlow is a comprehensive invoice management system that allows users to create professional invoices, track payment statuses, and manage client information. The application features a clean, modern interface with dark theme design and provides full CRUD functionality for invoice management.

## 🌟 Features

- ✨ **Create & Edit Invoices** - Intuitive form-based invoice creation and editing
- 📊 **Status Management** - Track invoices as Draft, Pending, or Paid
- 🔍 **Smart Filtering** - Filter invoices by status for better organization
- 📱 **Responsive Design** - Optimized for desktop and tablet devices
- 🔄 **Real-time Updates** - Instant synchronization with Firebase backend
- 💼 **Client Management** - Store and manage client information
- 🧾 **Itemized Billing** - Add multiple items with quantity and pricing
- 🎨 **Modern UI** - Clean, professional dark theme interface
- ⚡ **Fast Performance** - Built with Vue.js 3 for optimal speed

## 🛠️ Tech Stack

- **Frontend Framework:** Vue.js 3 with Composition API
- **State Management:** Vuex 4
- **Routing:** Vue Router 4
- **Backend/Database:** Firebase Firestore
- **Styling:** SCSS with responsive design
- **Build Tool:** Vue CLI 5
- **Package Manager:** npm
- **Icons & Assets:** Custom SVG icons

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A [Firebase](https://firebase.google.com/) account and project

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/invoice-management-app.git
   cd invoice-management-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Firestore Database
   - Copy your Firebase configuration
   - Update `src/firebase/firebaseInit.js` with your credentials:
   ```javascript
   const firebaseConfig = {
     apiKey: "your-api-key",
     authDomain: "your-auth-domain",
     projectId: "your-project-id",
     storageBucket: "your-storage-bucket",
     messagingSenderId: "your-messaging-sender-id",
     appId: "your-app-id",
     measurementId: "your-measurement-id"
   };
   ```

4. **Run the development server**
   ```bash
   npm run serve
   ```

5. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 📸 Screenshots

### Home Dashboard
*Main dashboard showing all invoices with filtering options*

### Invoice Creation
*Clean form interface for creating new invoices*

### Invoice Details
*Detailed view of individual invoices with status management*

### Mobile Responsive
*Optimized mobile experience (Note: Mobile functionality is limited by design)*

## 📁 Folder Structure

```
src/
├── assets/                 # Static assets (icons, images)
│   ├── icon-*.svg          # SVG icons
│   └── illustration-*.svg  # Illustrations
├── components/             # Reusable Vue components
│   ├── Invoice.vue         # Individual invoice item
│   ├── InvoiceModal.vue    # Invoice creation/editing modal
│   ├── Loading.vue         # Loading spinner component
│   ├── Modal.vue           # Confirmation modal
│   └── Navigation.vue      # App navigation
├── firebase/               # Firebase configuration
│   └── firebaseInit.js     # Firebase initialization
├── router/                 # Vue Router configuration
│   └── index.js           # Route definitions
├── store/                  # Vuex store
│   └── index.js           # State management
├── views/                  # Page components
│   ├── Home.vue           # Home dashboard
│   └── InvoiceView.vue    # Individual invoice view
├── App.vue                # Root component
└── main.js               # Application entry point
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
