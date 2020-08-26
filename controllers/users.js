const User = require('../models/userSchema')

async function userProfile(req, res, next) {
  try {
    // ? we find the users profile, by using the ID of the user making the request, so to do this, a user must use a valid token
    const user = await User.findById(req.currentUser._id).populate('createdEvents') // ? populating the virtual "createdQueens" field while finding them, see the user model for how this was created
    if (!user) throw new Error(notFound) // ? <-- if for any reason that cant be found, throw a not found error
    res.status(200).json(user) // ? <-- if it is found, send that user object back in the response
  } catch (err) {
    next(err) // ? <-- any error that gets thrown will be sent to the error handler
  }
}

module.exports = {
  profile: userProfile
}