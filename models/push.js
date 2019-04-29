var mongoose = require('mongoose');
var PushSchema = require('../schemas/push');
var Push = mongoose.model('Push', PushSchema);

module.exports = Push;