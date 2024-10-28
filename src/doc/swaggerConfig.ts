import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';

dotenv.config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product API',
      version: '1.0.0',
      description: 'API for managing products',
    },
    servers: [
      {
        url: process.env.APP_URL || 'http://localhost:3000/',
        description: 'Development server',
      },
    ],
  },
  apis: ['src/doc/*'],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
