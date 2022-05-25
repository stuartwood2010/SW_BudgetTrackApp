const { Schema, model } = require('mongoose');

const projectionSchema = new Schema({
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

module.exports = model('Projection', projectionSchema);