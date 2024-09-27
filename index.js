'use strict';

const fastify = require('fastify')({ logger: true });

fastify.get('/healthcheck', async (req, res) => {
  const response = {
    status: 'The server is running',
    date: new Date().toISOString(),
  };

  res.code(200).send(response);
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000, host: '0.0.0.0' });
    console.log('Server is running on http://localhost:3000');
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();