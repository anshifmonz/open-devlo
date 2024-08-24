import pg from 'pg';
import 'dotenv/config';

const db = new pg.Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT, 10) || '5432',
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

db.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

export { db };