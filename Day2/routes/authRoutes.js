import express from 'express';
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Auth:
 *       type: object
 *       required:
 *         - username
 *         - password
 *       properties:
 *         username:
 *           type: string
 *           example: avinash
 *         password:
 *           type: string
 *           example: pass123
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auth'
 *     responses:
 *       201:
 *         description: User registered successfully
 */
router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  // For now, just echo back (you can add DB later)
  res.status(201).send(`User ${username} registered`);
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Auth'
 *     responses:
 *       200:
 *         description: Login success message
 */
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Dummy login logic for now
  res.send(`User ${username} logged in`);
});

export default router;
