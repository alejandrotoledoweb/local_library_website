var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BookInstanceSchema = new Schema(
  {
    book: {type: Schema.Types.ObjectId, ref: 'Book', require: true },
    imprint: {type: String, require: true};
    status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    due_back: { type: String, default: Date.now}
  }
);

// Virtual for bookInstance's URL 
BookInstanceSchema.virtual('url').get(function() {
  return '/catalog/bookinstance/' + this._id;
});

module.export = mongoose.model('BookInstance', BookInstanceSchema);