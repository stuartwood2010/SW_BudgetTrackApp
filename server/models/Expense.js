const { Schema, model } = require('mongoose');

const expenseSchema = new Schema({
	amount: {
		type: Number,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	note: {
		type: String,
	},
	category: {
		type: Schema.Types.ObjectId,
		ref: 'Category',
		required: true
	}
});

module.exports = model('Expense', expenseSchema);