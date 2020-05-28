var express = require('express');
var router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

router.get('/tickets/:id/new', ticketsCtrl.new)
router.post('/tickets/:id', ticketsCtrl.create)
router.post('/flights/:id/tickets', ticketsCtrl.addTickets);

module.exports = router;