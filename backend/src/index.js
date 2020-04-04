const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 * Rota / Recurso
 */

 /**
  * Metodo HTTP:
  * 
  * GET: Buscar/listar uma informacao do back-end
  * POST: Criar uma informacao no back-end
  * PUT: Alterar uma informacao no back-end
  * DELETE: Deletar uma informacao no back-end
  */

/**
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota apos o "?"" (Filtros, paginacao)
 * Route Params: Parametros ultilizados para identificar recursos
 * Request Body: Corpo da requisicao, ultilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc.
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
