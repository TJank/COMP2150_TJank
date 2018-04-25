var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlayerSchema = new Schema (
    {
        name: {type: String, required: true},
        ingameName: {type: String, required: true},
        birthDate: {type: String, required: true},
        teamName: {type: String, required: true}
    }
);

PlayerSchema.virtual('url').get(function(){
    return '/' + this._id;
});

// Export csgoplayer model
module.exports = mongoose.model('CSGOPlayer', PlayerSchema)



