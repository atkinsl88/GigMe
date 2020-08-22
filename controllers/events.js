const Event = require('../models/eventSchema')

async function eventsIndex (req, res) {
  const events = await Event.find().populate('user')
  res.status(200).json(events)
}

async function eventsShow (req, res) {
  try {
    const events = await Event.findById(req.params.id).populate('user')
    if (!events) throw new Error()
    res.status(200).json(events)
  } catch (err) {
    res.json(err)
  }
}

async function eventsCreate (req, res) {
  try {
    const createdEvents = await Event.create(req.body)
    res.status(201).json(createdEvents)
  } catch (err) {
    res.json(err)
  }
}

async function eventsEdit (req, res) {
  try {
    const editedEvents = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    )
    res.status(202).json(editedEvents)
  } catch (err) {
    res.json(err)
  }
}

async function eventsDelete (req, res) {
  try {
    await Event.findByIdAndDelete(req.params.id)
    res.sendStatus(204)
  } catch (err) {
    res.json(err)
  }
}

async function eventsCommentCreate (req, res) {
  try {
    const event = await Event.findById(req.params.id)
    const commentBody = req.body 
    commentBody.user = req.currentUser._id
    event.comments.push(commentBody)
    await event.save()
    res.status(201).json(event)
  } catch (err) {
    res.status(400).json(err)
  }
}

module.exports = {
  index: eventsIndex,
  show: eventsShow,
  create: eventsCreate,
  edit: eventsEdit,
  delete: eventsDelete,
  commentCreate: eventsCommentCreate
}