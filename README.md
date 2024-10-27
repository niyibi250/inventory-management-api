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
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables: Create a .env file in the root directory of the project and add the following line:**
    ```bash 
    MONGODB_URI=<your-mongodb-uri>
    ```

4. **Start the MongoDB server: Ensure you have MongoDB running locally or use a cloud service like MongoDB Atlas.**
    

# Database Configuration

This project uses MongoDB for data storage. Ensure that you have MongoDB installed locally or have access to a MongoDB server. Configure the connection string in the .env file as mentioned in the Installation section.

# API Endpoints

1. **Add Product:**

   - Endpoint: POST /api/products
   - Request Body:
            {
           "name": "Product Name",
           "quantity": 10,
           "category": "Category Name"
            }
   - Responses:
       - 201 Created: Returns the created product object.
       - 400 Bad Request: If the product name is not unique.
       - 500 Internal Server Error: If there is a server error.
2. **Update Product Quantity**

   - Endpoint: PUT /api/products/:id/quantity
   - Request Body:
          {
            "quantity": 20
          }
   - Responses:
      - 200 OK: Returns the updated product object.
      - 400 Bad Request: If quantity is less than 0.
      - 404 Not Found: If the product does not exist.
      - 500 Internal Server Error: If there is a server error.

3. **Delete Product**

   - Endpoint: DELETE /api/products/:id
   - Responses:
      - 200 OK: Returns a success message.
      - 404 Not Found: If the product does not exist.
      - 400 Bad Request: If the product has a non-zero quantity.
      - 500 Internal Server Error: If there is a server error.

4. **Get All Products**

   - Endpoint: GET /api/products
   - Query Parameters:
      - category (optional): Filter products by category.
      - minQuantity (optional): Minimum quantity filter.
      - maxQuantity (optional): Maximum quantity filter.
      - limit (optional): Number of products to return (default is 10).
      - page (optional): Page number for pagination (default is 1).
   - Responses:
      - 200 OK: Returns an array of product objects.
      - 500 Internal Server Error: If there is a server error.

5. **Get Product By ID**

   - Endpoint: GET /api/products/:id
   - Responses:
      - 200 OK: Returns the product object.
      - 404 Not Found: If the product does not exist.
      - 500 Internal Server Error: If there is a server error.


# Testing the API
To test the API endpoints, you can use tools like Postman or curl. Below are examples of how to use both methods.
## Testing with Postman

1. **Add a Product**
   - Method: POST
   - URL: http://localhost:3000/api/products
   - Body (raw JSON):{
  "name": "Product Name",
  "quantity": 10,
  "category": "Category Name"
}

2. **Get All Products**
   - Method: GET
   - URL: http://localhost:3000/api/products

3. **Update Product Quantity**
   - Method: PUT
   - URL: http://localhost:3000/api/products/<product-id>/quantity
   - Body (raw JSON): {
  "quantity": 20
}

4. **Delete a Product**
   - Method: DELETE
   - URL: http://localhost:3000/api/products/<product-id>

5. **Get Product By ID**
   - Method: GET
   - URL: http://localhost:3000/api/products/<product-id>


# License
This project is licensed under the MIT License - see the LICENSE file for details.


### Notes:
- **Repository URL**: Replace `<repository-url>` with the URL of your project's repository (e.g., GitHub link).
- **Project Directory**: Replace `<project-directory>` with the name of your project directory.
- **MongoDB URI**: Make sure to update `<your-mongodb-uri>` with your actual MongoDB connection string.
- **Product ID**: Replace `<product-id>` with the actual ID of the product when testing.

This README provides clear instructions for setting up the project, using the API, and testing it effectively. You can customize any sections further to better match your project's specifics or preferences.

         
