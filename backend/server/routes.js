const router = require('express').Router();
const controller = require('./controllers');

router.get('/users', controller.users.get);
router.post('/users', controller.users.post);
router.post('/users/event', controller.userEvent.post);

router.get('/events', controller.events.get);

module.exports = router;
