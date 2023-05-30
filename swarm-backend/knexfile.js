const env = process.env.NODE_ENV || 'development';
require('dotenv').config({ path: `.env.${env}` });

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './swarm.db', // Ruta y nombre de tu archivo de base de datos SQLite
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'sqlite3',
    connection: {
      filename: './swarm.db', // Ruta y nombre de tu archivo de base de datos SQLite
    },
    useNullAsDefault: true,
  },
};
