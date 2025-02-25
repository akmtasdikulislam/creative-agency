# Creative Agency

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://res.cloudinary.com/disqpzshx/image/upload/v1740489256/creative-agency/logo-dark.png">
    <source media="(prefers-color-scheme: light)" srcset="https://res.cloudinary.com/disqpzshx/image/upload/v1740489255/creative-agency/logo-light.png">
    <img alt="Creative Agency Banner" src="https://res.cloudinary.com/disqpzshx/image/upload/v1740489256/creative-agency/logo-dark.png">
  </picture>
</p>

A full-stack MERN application for a creative agency offering web design and development services. This project demonstrates role-based functionality for customers and administrators, including service browsing, order placement, review management, and robust admin controls.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Repository Structure](#repository-structure)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview

Creative Agency is built with the MERN stack (MongoDB, Express.js, React, Node.js) and modern tools such as Tailwind CSS, DaisyUI, and Firebase. This application allows customers to explore services, place orders, and submit feedback while providing administrators with a secure dashboard to manage services, orders, and users.

This monorepo contains both the frontend and backend code in separate folders.

## Features

### Admin

- **Services Management:** Create, read, update, and delete services.
- **Order Management:** View and update order statuses (pending, on-going, complete).
- **User Management:** View, delete, and promote users.
- **Profile Management:** Manage admin profile details.

### Customer

- **Order Management:** View, add, edit, and delete orders (when status is "Pending"), with file attachments.
- **Review Management:** Submit, edit, and delete reviews.
- **Profile Management:** Edit profile and reset password (via Firebase).

### General

- **Authentication:** Secure login/signup via email/password and social logins (Google, Facebook) with Firebase.
- **Responsive UI:** Dynamic landing page featuring a hero section, service grid, carousel, and client feedback.
- **API Integration:** Robust API endpoints for services, orders, users, and file uploads.

## Tech Stack

### Frontend

- **Framework:** ReactJS (Vite)
- **Styling:** Tailwind CSS & DaisyUI
- **Routing:** React Router v7
- **State Management:** React Context API
- **Authentication:** Firebase v9+
- **Utilities:** React Hot Toast, React Icons, Swiper.js, React Modal

### Backend

- **Framework:** Express.js
- **Database:** MongoDB Atlas (Mongoose)
- **Authentication:** JWT-based middleware
- **File Uploads:** Multer
- **Validation:** Express Validator
- **Email:** Nodemailer

## Repository Structure

```
creative-agency/
├── backend/         # Express.js backend code
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── server.js
├── frontend/        # ReactJS frontend code
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
│   └── vite.config.js
└── README.md
```

## Installation

### Prerequisites

- Node.js (v14+)
- Yarn or npm
- MongoDB Atlas account or local MongoDB instance

### Backend Setup

1. **Navigate to the `backend` directory:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Configure environment variables** by creating a `.env` file (see [Environment Variables](#environment-variables)).

4. **Start the backend server:**

   ```bash
   yarn start
   # or
   npm run start
   ```

### Frontend Setup

1. **Open a new terminal window and navigate to the `frontend` directory:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Configure environment variables** by creating a `.env` file in the `frontend` folder.

4. **Start the development server:**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

## Environment Variables

### Backend (.env)

Create a `.env` file in the `backend` folder with at least the following variables:

```ini
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```

### Frontend (.env)

Create a `.env` file in the `frontend` folder with the necessary Firebase configuration and API endpoint:

```ini
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_API_BASE_URL=http://localhost:5000/api
```

## Usage

- **Development:**  
  Run both the backend and frontend servers concurrently in separate terminal windows as described in the [Installation](#installation) section.

- **Production Build:**  
  Follow your preferred deployment strategy for both the backend (Node.js server) and frontend (static build generated by Vite).

- **Testing API Endpoints:**  
  Use tools like Postman or Insomnia to interact with the backend API endpoints (authentication, services, orders, users, file upload).

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

## Contact

If you have any questions or need further information, please feel free to reach out:

- **Email:** your.email@example.com
- **LinkedIn:** [Your LinkedIn](#)
- **Upwork:** [Your Upwork Profile](#)
