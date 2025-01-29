mkdir social-media-app
cd social-media-app
mkdir backend
cd backend
npm init -y 
mkdir src
cd src
mkdir routes controllers services models config middleware components pages services contexts
touch server.js 
cd ..
npm create vite@latest frontend -- --template react
cd frontend
npm install 
npm install axios react-router-dom @mui/material @emotion/react @emotion/styled 
npm install @fontsource/roboto 
