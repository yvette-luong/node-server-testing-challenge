// Update with your config settings.

module.exports = {

  development: {
    useNullAsDefault: true,
    client: 'sqlite3',
    connection: {
      filename: './database/project.db3'
    }, 
    migrations: {
      directory: "./database/migrations",
  },
  seeds: {
    directory: "./database/seeds",
  },
    },
 //always set migrations and seeds inside development


  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
