const { Schema, model } = require('mongoose');

const trackerSchema = new Schema({
    expenses: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Expense',
        }
    ],
    income: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Income',
        }
    ]
});

module.exports = model('Tracker', trackerSchema);