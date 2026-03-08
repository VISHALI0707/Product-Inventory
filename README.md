Product Inventory Management System
Description

The Product Inventory Management System is a backend-focused web application built using Node.js, Express.js, and MongoDB.
It provides a secure and scalable REST API for managing product inventory.

The system allows users to register, log in, and manage their products using JWT-based authentication. Each user can perform CRUD operations on their own products while ensuring secure access through protected routes.

This project demonstrates backend development concepts such as authentication, middleware, database modeling, and REST API design.

Project Developed By: Mercy

Project Overview

The system enables users to:

Create secure accounts

Log in and receive authentication tokens

Add products to their inventory

View all products they own

Update product details

Delete products

Search products by name

Each user's data is isolated and protected, ensuring users can access only their own inventory.

Key Objectives

Implement secure JWT authentication

Provide RESTful CRUD APIs for inventory management

Maintain user-specific product ownership

Build a scalable backend architecture

Ensure fast API responses with proper error handling

Target Users

Small business owners managing inventory

Freelancers tracking services or items

Developers learning backend API development

Students practicing Node.js and database integration

Anyone needing a simple inventory backend system

Tech Stack

Backend Technologies

Node.js – JavaScript runtime

Express.js – Web framework

MongoDB – NoSQL database

Mongoose – ODM for MongoDB

JSON Web Token – Authentication

bcryptjs – Password hashing

dotenv – Environment configuration

cors – Cross-Origin Resource Sharing

Development Tools

Visual Studio Code

Thunder Client

Project Architecture

The project follows a three-layer backend architecture.

Backend Layer

REST API using Express

JWT authentication middleware

MVC architecture

Database Layer

MongoDB NoSQL database

Mongoose schema models

API Layer

Handles client requests and responses.

Folder Structure
server
│
├── node_modules
├── src
│   ├── controllers
│   │   ├── auth.controller.js
│   │   └── product.controller.js
│   │
│   ├── db
│   │   └── db.js
│   │
│   ├── middlewares
│   │   └── auth.middleware.js
│   │
│   ├── models
│   │   ├── User.js
│   │   └── Product.js
│   │
│   ├── routes
│   │   ├── auth.routes.js
│   │   └── product.routes.js
│   │
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
└── package-lock.json
Database Design
Users Collection
_id
name
email
password
timestamps
Products Collection
_id
userId
name
price
quantity
description
timestamps

Relationship:

One User → Many Products

Features
Feature	Description
User Authentication	Secure register and login using JWT
Product CRUD	Add, view, update and delete products
Private Data Access	Users access only their own products
Product Search	Search products by name
Secure API	Middleware protected routes
Installation
1 Clone Repository
git clone https://github.com/yourusername/product-inventory-system.git
2 Navigate to Server Folder
cd server
3 Install Dependencies
npm install
4 Create Environment File

Create .env

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
5 Start Server
npm start

Console Output

Server running on PORT 5000
Database Connected
API Endpoints
Authentication APIs
Register User

POST

/api/v1/auth/register

Body

{
"name":"John",
"email":"john@example.com",
"password":"123456"
}
Login User

POST

/api/v1/auth/login

Body

{
"email":"john@example.com",
"password":"123456"
}

Returns JWT Token for authentication.

Product APIs

All product APIs require Authorization Header

Authorization: Bearer <JWT_TOKEN>
Create Product

POST

/api/v1/products

Body

{
"name":"Laptop",
"price":800,
"quantity":5,
"description":"Dell Laptop"
}
Get Products

GET

/api/v1/products
Update Product

PUT

/api/v1/products/:id
Delete Product

DELETE

/api/v1/products/:id
Search Product

GET

/api/v1/products/search?name=laptop
API Testing

The APIs can be tested using:

Thunder Client

Postman

Steps:
1 Register user
2 Login user
3 Copy JWT token
4 Add Authorization header
5 Test product APIs

Project Workflow

1 User registers or logs in
2 Server generates JWT token
3 Client sends token in request header
4 Middleware verifies token
5 Controller processes request
6 MongoDB stores or retrieves data
7 API sends response

Future Improvements

Add frontend using React

Implement pagination

Add product categories

Add inventory analytics dashboard