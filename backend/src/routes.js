const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Login das ONGs, verificar se mesmo
 */
routes.post('/sessions', SessionController.create);

/**
 * Lista das ONGs
 */
routes.get('/ongs', OngController.index);

/**
 * Cadastro das ONGs
 */
routes.post('/ongs', OngController.create);


/**
 * Checar se ONG quer deletar o proprio incidente
 */
routes.get('/profile', ProfileController.index);

/**
 * Lista dos Incidentes
 */
routes.get('/incidents', IncidentController.index);

/**
 * Cadastro dos Incidentes
 */
routes.post('/incidents', IncidentController.create);

/**
 * Deletar um Incidente
 */
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes; 