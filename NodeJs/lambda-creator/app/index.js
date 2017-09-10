const express = require('express');
const router  = express.Router();

//GET
router.get('/', require('./home/index'));
router.get('/criar-lambda', require('./lambda/index'));
router.get('/lista-lambdas', require('./lambda/lista'));
router.get('/dados-lambdas', require('./lambda/dados'));

//POST
router.post('/criar-aws-lambda', require('./lambda/criador'));

//DELETE
router.delete('/deletar-lambda', require('./lambda/deletar'));

module.exports = router;
