const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, required: true, maxlength: 100 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
}, {
  timestamps: true
})

const likeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  text: { type: String }
})

// const artistSchema = new mongoose.Schema({
//   artistName: { type: String, required: true , maxlength: 60 }
// })

const eventSchema = new mongoose.Schema({
  artistName: { type: String }, 
  venue: { type: String, required: true },
  venueAddress: { type: String, required: true },
  genre: { type: String }, //could also be an array for cross-genre acts?
  date: { type: String, required: true }, //this depends on react calendar needs?
  doorsAt: { type: Number, required: true }, //this depends on how we plan to use the dates?
  hasBar: { type: Boolean },
  latitude: { type: Number, required: true },// for map markers
  longitude: { type: Number, required: true }, //for map markers
  posterImage: { type: String, required: true }, //url for image
  eventPrice: { type: String },
  aboutEvent: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },//user who added the event (needed for deletions and edits)
  comments: [commentSchema], //comments embedded
  likes: [likeSchema]
} , {
  timestamps: true
})

eventSchema.plugin(require('mongoose-unique-validator'))

module.exports =  mongoose.model('Event', eventSchema)
