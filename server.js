import { fastify } from 'fastify';
import { DatabasePostgres } from './database-postgres.js';
// import { Database } from './my-database.js';

const server = fastify();
// const database = new Database();
const database = new DatabasePostgres;

server.get('/users', async (req) => {
  const search = req.query.search;
  const users = await database.list(search);

  return users;
});

server.post('/users', async (req, res) => {
  const {name} = req.body;

  await database.create({
    name
  });

  return res.status(201).send();
});

server.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const {name} = req.body;

  await database.update(userId, {
    name
  });

  return res.status(204).send();
});

server.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;

  await database.delete(userId);

  return res.status(204).send();
});

server.listen({
  port: process.env.PORT ?? 3333,
});