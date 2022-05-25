const { Schema, model } = require('mongoose');

const incomeSchema = new Schema({
	amount: Number,
	note: String,
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = model('Expense', incomeSchema);