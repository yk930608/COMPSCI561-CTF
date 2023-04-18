# syntax=docker/dockerfile:1
   
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node","--inspect=0.0.0.0","src/index.js"]