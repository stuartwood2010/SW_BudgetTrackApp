const db = require("./connection");
const {
    Budget, Category, Expense, Income, Projection, Tracker, User
} = require("../models");

db.once("open", async () => {
    await Budget.deleteMany();
    await Category.deleteMany();
    await Expense.deleteMany();
    await Income.deleteMany();
    await Projection.deleteMany();
    await Tracker.deleteMany();
    await User.deleteMany();

    const budgets = await Budget.insertMany(
      
    )

    console.log("products seeded");

 

    process.exit();
});

