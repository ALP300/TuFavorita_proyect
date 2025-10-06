import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Carga las variables del .env

const { Client } = pg;

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false } // Necesario para Render
};

const client = new Client(config);

export async function conectar() {
  try {
    await client.connect();
    console.log('✅ Conexión exitosa a la base de datos PostgreSQL');
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error);
  }
}

