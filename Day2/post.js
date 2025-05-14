import express from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
app.use(express.json());

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API DOCUMENTATION',
      version: '1.0.0',
      description: 'API documentation for POST routes',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./post.js'], // points to this file
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /:
 *   post:
 *     summary: Basic POST route
 *     responses:
 *       200:
 *         description: Returns simple message
 */
app.post('/', (req, res) => {
  res.send('You sent data');
});

/**
 * @swagger
 * /name:
 *   post:
 *     summary: Send name in request body
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: Avinash
 *     responses:
 *       200:
 *         description: Returns the name
 */
app.post('/name', (req, res) => {
  const name = req.body.name;
  res.send(`The name is ${name}`);
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login with username and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *                 example: avinash
 *               password:
 *                 type: string
 *                 example: pass123
 *     responses:
 *       200:
 *         description: Returns the submitted credentials
 */
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  res.send(`The username is ${username} and password is ${password}`);
});
/**
 * @swagger
 * /username:
 *   get:
 *     summary: Get a sample username
 *     description: Returns a hardcoded username
 *     responses:
 *       200:
 *         description: A username string
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 *               example: avinash
 */
app.get('/username', (req, res) => {
  res.send('avinash');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
  console.log('Swagger docs at http://localhost:3000/api-docs');
});
