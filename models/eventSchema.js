const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 500 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

// const artistSchema = new mongoose.Schema({
//   artistName: { type: String, required: true , maxlength: 60 }
// })

const eventSchema = new mongoose.Schema({
  artists: { type: String }, 
  genre: { type: String }, //could also be an array for cross-genre acts?
  date: { type: Number, required: true }, //this depends on react calendar needs?
  time: { type: Number, required: true }, //this depends on how we plan to use the dates?
  venue: { type: String, required: true },
  aboutEvent: { type: String, required: false },
  address: { type: String, required: true },
  latitude: { type: Number, required: true },// for map markers
  longitude: { type: Number, required: true }, //for map markers
  image: { type: String, required: true }, //url for image
  eventPrice: { type: String , required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },//user who added the event (needed for deletions and edits)
  comments: [commentSchema] //comments embedded
} , {
  timestamps: true
})

eventSchema.plugin(require('mongoose-unique-validator'))

module.exports =  mongoose.model('Event', eventSchema)
