const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

// const genreSchema = new mongoose.Schema({
//   text: { type: String, required: true } // control this input with a dropdown menu? Would help keep searches accurate?
// })

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 50 },
  email: { type: String, required: true, unique: true },
  genres: { type: String }, //not sure if this is best way to deal with this? 
  aboutMe: { type: String , required: false },
  mySite: { type: String , required: false }, //for people to link a website or social media account?
  profilePicture: { type: String } , // would be helpful to find a way to upload and host images? 
  password: { type: String, required: true }
})

//! ----THE BELOW CODE IS FROM JACK'S REFERENCING NOTE, 
//!  useful for events a user is attending, etc, just not sure how to set this up 
//! for our purposes yet??

userSchema
  .virtual('createdEvents', { // ! <-- name of the virtual field
    ref: 'Event', // ! <-- name of the other Model as a reference
    localField: '_id', // ! <-- the field from this model to match, so our users._id
    foreignField: 'user' // ! <-- and the field to match is against on the Queens model
  })

userSchema 
  .set('toJSON', {
    virtuals: true, // ! <-- added this line to include virtuals in json responses
    transform(doc, json) {
      delete json.password
      return json
    }
  })

userSchema
  .virtual('passwordConfirmation')
  .set(function (passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema
  .pre('validate', function (next) { 
    if (this.isModified('password') && this.password !== this._passwordConfirmation) {
      this.invalidate('passwordConfirmation', 'does not match') 
    }
    next() 
  })

// ? Validation

userSchema
  .pre('save', function(next) { 
    if (this.isModified('password')) {
      this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync()) 
    }
    next() 
  })

// ? Save

userSchema.methods.validatePassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.plugin(require('mongoose-unique-validator'))

module.exports = mongoose.model('User', userSchema)