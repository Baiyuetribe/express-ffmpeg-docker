var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PushSchema = new Schema({
    movieid: { type: Schema.Types.ObjectId, ref: 'Movie' },
    createAt: {
        type: Date
    }
});
PushSchema.pre('save', function (next) {
    if (!this.createAt) {
        this.createAt = Date.now();
    }
    next();
});
module.exports = PushSchema;