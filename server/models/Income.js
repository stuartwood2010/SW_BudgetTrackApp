const { Schema, model } = require('mongoose');

const incomeSchema = new Schema({
	amount: {
		type: Number,
		required: true,
	},
	date: {
		type: Date,
		required: true,
	},
	note: {
		type: String,
	},
	source: {
		type: String,
		enum: ['Business', 'Investment', 'Salary', 'Other'],
		required: true,
	},
	budgetId: {
		type: Schema.Types.ObjectId,
		ref: 'Budget'
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = model('Expense', incomeSchema);