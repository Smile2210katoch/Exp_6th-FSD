const bcrypt = require('bcryptjs');

const users = [
  {
    id: 1,
    username: 'user123',
    password: bcrypt.hashSync('password123', 10)
  }
];

module.exports = users;