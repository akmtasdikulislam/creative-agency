# Creative Agency Frontend

A React-based frontend for Creative Agency, a full-stack MERN application offering web design and development services. This client-side application features a dynamic landing page, service browsing, order/review management, and secure authentication via Firebase.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Overview

Creative Agency's frontend is built using ReactJS with Vite for fast development and bundling. The application is styled with Tailwind CSS and DaisyUI, and leverages React Router v7 for client-side routing. User authentication is handled via Firebase, and notifications use React Hot Toast. This project demonstrates modern web development practices with a focus on performance, responsiveness, and user experience.

---

## Features

- **Responsive UI:** Dynamic landing page with a hero section, service grid, carousel, and client feedback.
- **Role-based Routing:** Separate views for customers and administrators.
- **Authentication:** Secure login/signup using Firebase (email/password and social logins).
- **Order & Review Management:** Interfaces for placing orders, attaching files, and managing reviews.
- **API Integration:** Seamless communication with the backend for services, orders, and user management.
- **State Management:** Uses React Context API to manage global state across the application.

---

## Tech Stack

- **Framework:** ReactJS (Vite)
- **Styling:** Tailwind CSS & DaisyUI
- **Routing:** React Router v7
- **State Management:** React Context API
- **Authentication:** Firebase v9+
- **Utilities:** React Hot Toast, React Icons, Swiper.js, React Modal

---

## Installation

### Prerequisites

- Node.js (v14+)
- Yarn or npm

### Steps

1. **Clone the repository and navigate to the `frontend` folder:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   # or
   npm install
   ```

3. **Configure environment variables:**  
   Create a `.env` file in the `frontend` directory (see [Environment Variables](#environment-variables)).

4. **Start the development server:**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

---

## Environment Variables

Create a `.env` file in the `frontend` folder with the following keys:

```ini
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_API_BASE_URL=http://localhost:5000/api
```

Replace the placeholder values with your actual Firebase configuration and API endpoint.

---

## Available Scripts

In the project directory, you can run:

- **`yarn dev` or `npm run dev`**  
  Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

- **`yarn build` or `npm run build`**  
  Builds the app for production to the `dist` folder.

- **`yarn preview` or `npm run preview`**  
  Serves the production build locally for testing.

---

## Deployment

To deploy the production build, run the build script and follow your preferred deployment strategy for static sites. The output in the `dist` folder can be hosted on platforms like Vercel, Netlify, or any static hosting service.

---

## Contributing

Contributions are welcome! Feel free to fork the repository, make changes, and submit pull requests. For major changes, please open an issue first to discuss your proposed improvements.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

For any questions or further information, please reach out:

- **Email:** akmtasdikulislam@gmail.com
- **LinkedIn:** [Akm Tasdikul Islam](https://www.linkedin.com/in/akm-tasdikul-islam/)
- **Upwork:** [Akm Tasdikul Islam](https://www.upwork.com/freelancers/~01fe1fc80c8877ffe2)
