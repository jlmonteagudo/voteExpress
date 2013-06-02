var mongoose = require('mongoose')
  , Schema = mongoose.Schema

var TeamSchema = new Schema({
  code: String,
  name: String,
  urlImage: String,
  votes: {type: Number, default: 0}
})

mongoose.model('Team', TeamSchema)
