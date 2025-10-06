// index.js
import express from 'express';
import {dirname, join} from 'path';
import {fileURLToPath} from 'url';
import { router } from './routes/router.js';
import { conectar } from './public/services/conexion.js';
import { ConsultarProductos } from './public/services/conexion.js';
const app = express();
const __dirnname= dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirnname, 'views'))
app.set('view engine', 'ejs')
app.use(router)
conectar()
ConsultarProductos()
// Iniciar el servidor
app.listen(3000, () => {
  console.log(`✅ Servidor iniciado en http://localhost:3000`);
});
