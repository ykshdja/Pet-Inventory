# Pet-Inventory 🐾

A full-featured React web application for managing pet inventory with a responsive interface and complete CRUD operations.

## ✨ Features

- **Complete Pet Inventory Management**: View, search, add, edit, and delete pet records
- **Responsive Design**: Clean, modern interface that works across all devices
- **Real-time Search**: Instant filtering of pets by any criteria
- **Full CRUD Operations**: Create, Read, Update, and Delete functionality
- **Routing**: Multi-page navigation with React Router
- **Component-based Architecture**: Modular, reusable React components

## 🏗️ Project Structure


Pet-Inventory/
├── public/
│   ├── index.html
│   ├── logo.svg
│   └── manifest.json
├── src/
│   ├── common/
│   │   ├── Footer.js          # Footer component with copyright
│   │   └── Header.js          # Navigation header with logo
│   ├── components/
│   │   ├── Edit.js            # Edit page component
│   │   ├── InventoryForm.js   # Form for adding/editing pets
│   │   ├── Pertable.js        # Reusable table component
│   │   ├── SearchPage.js      # Search functionality page
│   │   └── About.js           # About page with company info
│   ├── API.js                 # Service layer for backend API calls
│   ├── App.js                 # Main application component with routing
│   ├── App.css                # Global application styles
│   ├── App.test.js            # Test file for App component
│   ├── index.js               # Application entry point
│   ├── index.css              # Base styles
│   ├── setupTests.js          # Jest DOM setup
│   ├── reportWebVitals.js     # Performance metrics
│   └── assets/
│       ├── img3.png           # Petland logo
│       └── Capture.png        # Promotional banner
└── package.json


## 🛠️ Tech Stack

- **Frontend**: React 17+, JavaScript (ES6+), CSS3, HTML5
- **Routing**: React Router DOM
- **HTTP Client**: Fetch API
- **Styling**: Custom CSS with responsive design

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend server running on `http://localhost:3001`

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ykshdja/Pet-Inventory.git
   cd Pet-Inventory
