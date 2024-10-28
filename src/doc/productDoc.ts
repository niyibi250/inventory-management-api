/**
 * @swagger
 * tags:
 *   name: Product
 *   description: Operations related to products
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         ID:
 *           type: string
 *           example: "123e4567-e89b-12d3-a456-426614174000"
 *         name:
 *           type: string
 *           example: "New Product"
 *         quantity:
 *           type: integer
 *           example: 100
 *         category:
 *           type: string
 *           example: "Electronics"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2023-10-28T10:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2023-10-28T10:00:00Z"
 */

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Add a new product
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "New Product"
 *               quantity:
 *                 type: integer
 *                 example: 100
 *               category:
 *                 type: string
 *                 example: "Electronics"
 *     responses:
 *       200:
 *         description: Product created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Product name must be unique
 *       500:
 *         description: Failed to add product
 */

/**
 * @swagger
 * /api/products/{ID}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: ID
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to delete
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 *       400:
 *         description: Cannot delete a product with non-zero quantity
 *       500:
 *         description: Failed to delete product
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Retrieve a list of products
 *     tags: [Product]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter products by category
 *       - in: query
 *         name: minQuantity
 *         schema:
 *           type: integer
 *         description: Minimum quantity to filter products
 *       - in: query
 *         name: maxQuantity
 *         schema:
 *           type: integer
 *         description: Maximum quantity to filter products
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of products to retrieve per page
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: The page number to retrieve
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       500:
 *         description: Failed to retrieve products
 */

/**
 * @swagger
 * /api/products/{ID}:
 *   get:
 *     summary: Retrieve a product by ID
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: ID
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to retrieve
 *     responses:
 *       200:
 *         description: Product retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       404:
 *         description: Product not found
 *       500:
 *         description: Failed to retrieve product
 */

/**
 * @swagger
 * /api/products/{ID}/quantity:
 *   put:
 *     summary: Update product quantity
 *     tags: [Product]
 *     parameters:
 *       - in: path
 *         name: ID
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the product to update the quantity for
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *                 example: 50
 *     responses:
 *       200:
 *         description: Product quantity updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       400:
 *         description: Quantity must be greater than or equal to 0
 *       404:
 *         description: Product not found
 *       500:
 *         description: Failed to update product quantity
 */