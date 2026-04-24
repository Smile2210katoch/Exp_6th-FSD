const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('../models/userModel');

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username);

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
};

const protectedRoute = (req, res) => {
  res.json({ message: 'Access granted to protected route', user: req.user });
};

module.exports = { login, protectedRoute };