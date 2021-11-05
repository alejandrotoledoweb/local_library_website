var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
  {
    name: {type: String, required: true, minLength: 3, maxLength: 100},
  }
)

GenreSchema.virtual('url').get(function(){
  return 'catalog/genre/' + this_id;
});

module.exports = mongoose.model('Genre', GenreSchema);