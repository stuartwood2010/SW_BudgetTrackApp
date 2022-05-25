const { Schema, model } = require('mongoose');

const expenseSchema = new Schema({
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
		required: true,
	},
	category: {
		type: String,
		enum: ['Debt-Payment', 'Donations', 'Entertainment', 'Food', 'Healthcare', 'Housing', 'Investing', 'Legal', 'Saving', 'Shopping', 'Subscriptions', 'Transportation', 'Other'],
		required: true
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

module.exports = model('Expense', expenseSchema);