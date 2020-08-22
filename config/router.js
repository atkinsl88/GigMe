const router = require('express').Router()
const events = require('../controllers/events')
const auth = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute') //! Don't need this yet


router.route('/events')
  .get(events.index)
  .post(secureRoute, events.create)

router.route('/events/:id')
  .get(events.show)
  .put(secureRoute, events.edit)
  .delete(secureRoute, events.delete)

router.route('/events/:id/comments')
  .post(secureRoute, events.commentCreate)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

module.exports = router