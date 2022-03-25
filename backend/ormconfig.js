require('dotenv').config();

module.exports = {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_DEV_NAME,
    synchronize: false,
    logging: true,
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/database/migrations/*.js'],
    cli: { migrationsDir: 'src/database/migrations' },
    extra: { max: process.env.PG_MAX_POOL_SIZE || 10 }
};