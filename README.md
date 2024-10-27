# Product Management API

## Overview
This project is a RESTful API for managing products in a database. It allows users to perform CRUD operations (Create, Read, Update, Delete) on products, ensuring that each product has a unique identifier. The API is built using Node.js, Express, and MongoDB.

## Table of Contents
- [Installation](#installation)
- [Database Configuration](#database-configuration)
- [API Endpoints](#api-endpoints)
- [Testing the API](#testing-the-api)
- [License](#license)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd <project-directory>

2. **Install dependencies:**
   ```bash
   npm install

3. **Set up environment variables: Create a .env file in the root directory of the project and add the following line:**
    ```bash 
    MONGODB_URI=<your-mongodb-uri>

4. **Start the MongoDB server: Ensure you have MongoDB running locally or use a cloud service like MongoDB Atlas.**
    

# Database Configuration

This project uses MongoDB for data storage. Ensure that you have MongoDB installed locally or have access to a MongoDB server. Configure the connection string in the .env file as mentioned in the Installation section.

# API Endpoints

1. **Add Product:**

   Endpoint: POST /api/products
   Request Body:
   {
  "name": "Product Name",
  "quantity": 10,
  "category": "Category Name"
  }

  Responses:
    201 Created: Returns the created product object.
    400 Bad Request: If the product name is not unique.
    500 Internal Server Error: If there is a server error.
