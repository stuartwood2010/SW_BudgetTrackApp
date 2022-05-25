const { Schema, model } = require('mongoose');

const budgetSchema = new Schema({
    dateCreated: {
        type: Date,
        default: Date.now
    },
    userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
    projection: {
        type: Schema.Types.ObjectId,
		ref: 'Projection',
    },
    tracker: {
        type: Schema.Types.ObjectId,
        ref: 'Tracker',
    }
});

module.exports = model('Budget', budgetSchema);