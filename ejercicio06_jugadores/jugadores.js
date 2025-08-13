const { faker } = require("@faker-js/faker");

const jugadores = [
  {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
  {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
  {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
  {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
];

module.exports = jugadores;
