Social Media App
📁 Project Setup
1️⃣ Create Project Directory
bash
Copy
Edit
mkdir social-media-app
cd social-media-app
2️⃣ Backend Setup
bash
Copy
Edit
mkdir backend
cd backend
npm init -y 
3️⃣ Create Backend Folder Structure
bash
Copy
Edit
mkdir src
cd src
mkdir routes controllers services models config middleware components pages services contexts
touch server.js 
cd ..
4️⃣ Frontend Setup
bash
Copy
Edit
npm create vite@latest frontend -- --template react
cd frontend
npm install 
5️⃣ Install Dependencies
bash
Copy
Edit
npm install axios react-router-dom @mui/material @emotion/react @emotion/styled 
npm install @fontsource/roboto
 
