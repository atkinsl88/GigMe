const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Event = require('../models/eventSchema')
const eventData = require('./data/events')
const User = require('../models/userSchema')
const userData = require('./data/users')

mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  async (err, db) => {
    if (err) { // * if anything goes wrong connecting, just log error and stop
      console.log(err)
      return
    }
    try {
      await db.dropDatabase() // * empty the database of all previous data
      console.log('Database Dropped 👍')
      const users = await User.create(userData) // * recreate the users
      console.log(`${'🙂'.repeat(users.length)} created`)
      const eventsWithUsers = eventData.map(event => { // * map over all the queens and add one of our newly created users and the queens "user" (the person who created it)
        event.user = users[0]._id
        return event
      })
      const events = await Event.create(eventsWithUsers) // * We re create all that data
      console.log(`${events.length} Events created 🥁`)
     
      await mongoose.connection.close() // * close the connection to the database
      console.log('Goodbye 👋')
    } catch (err) {
      await mongoose.connection.close()
      console.log(err) // * if anything goes wrong after connecting, just log error and stop
      return
    }
  })