const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const budgetSchema = new Schema({
    dateCreated: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
    month: {
        type: String,
        enum: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        required: true,
    },
    expenses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Expense', 
        }
    ],
    userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = model('Budget', budgetSchema);