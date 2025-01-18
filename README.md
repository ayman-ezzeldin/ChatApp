# **Chat Application** 💬

Welcome to **Chat Application**, a real-time messaging platform built with modern web technologies! This application allows users to sign up, log in, and chat with others in real-time. It features user authentication, real-time messaging, and a sleek, responsive user interface.

---

## **Features** ✨

- **User Authentication**:
  - Sign up with a unique username, password, and profile details.
  - Log in securely with JWT (JSON Web Tokens) for session management.
  - Log out functionality to securely end the session.

- **Real-Time Messaging**:
  - Send and receive messages instantly using WebSocket technology.
  - Notifications for new messages with sound alerts.
  - View conversation history with other users.

- **User Profiles**:
  - Customizable profile pictures based on gender.
  - Display user details such as full name and username.

- **Responsive Design**:
  - Works seamlessly on desktop, tablet, and mobile devices.
  - Clean and intuitive user interface.

- **Security**:
  - Passwords are hashed using **bcrypt** for secure storage.
  - Protected routes to ensure only authenticated users can access the chat.

---

## **Tech Stack** 🛠️

- **Frontend**:
  - **React**: A JavaScript library for building user interfaces.
  - **React Hot Toast**: For displaying notifications and alerts.
  - **Zustand**: For state management.
  - **Socket.IO Client**: For real-time communication with the backend.

- **Backend**:
  - **Node.js**: A JavaScript runtime for building the server.
  - **Express**: A web framework for Node.js.
  - **MongoDB**: A NoSQL database for storing user data and messages.
  - **Mongoose**: An ODM (Object Data Modeling) library for MongoDB.
  - **Socket.IO**: For enabling real-time, bidirectional communication.
  - **bcrypt**: For hashing passwords.
  - **JSON Web Tokens (JWT)**: For user authentication and session management.

- **Other Tools**:
  - **Nodemon**: For automatically restarting the server during development.
  - **Postman**: For testing API endpoints.
  - **Git**: For version control.


## **Installation** 🚀

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Git (optional)

### Steps
1. **Clone the repository**:
   ```bash
   git clone https://github.com/ayman-ezzeldin/ChatApp.git
   cd chat-application

2. **Install dependencies**
   
Install backend dependencies
  ```bash
  npm install
```
Install frontend dependencies
```bash
cd ../frontend
npm install
```

3 **Set up environment variables:**
```
MONGO_URI=mongodb://localhost:27017/chat-app
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

4 **Start the backend server:**
```
npm run server
```
5 **Start the frontend development server:**
```
cd frontend
npm run dev
```

6 **Open the application:**
```
Visit http://localhost:3000 in your browser.
```

## **API Endpoints** 🌐

### **Auth Routes**
- **POST `/api/auth/signup`**: Register a new user.
- **POST `/api/auth/login`**: Log in an existing user.
- **POST `/api/auth/logout`**: Log out the current user.

### **User Routes**
- **GET `/api/users`**: Fetch all users (for conversations).

### **Message Routes**
- **GET `/api/messages/:conversationId`**: Fetch messages for a conversation.
- **POST `/api/messages/send/:conversationId`**: Send a message.

---

## **Contributing** 🤝

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes and push to your branch.
4. Submit a pull request with a detailed description of your changes.

---

## **License** 📜

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## **Acknowledgments** 🙏

- **Socket.IO**: For enabling real-time communication.
- **React**: For building a dynamic and responsive frontend.
- **MongoDB**: For providing a flexible and scalable database solution.

---

## **Contact** 📧

If you have any questions or feedback, feel free to reach out:

- **Email**: aymanmae@gmail.com
- **GitHub**: [your-username](https://github.com/Ayman-ezzeldin)
- **LinkedIn**: [Your Name](https://www.linkedin.com/in/ayman-ezzeldin)


<!-- Accounts -->
aymanezz
girl account
ggggggg
Ben ezz
