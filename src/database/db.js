const mongoose = require('mongoose')
async function DatabaseConnection() {
    await mongoose.connect('mongodb+srv://TaskManager:WmvRDbU6y7zaVWWx@cluster0.o72kxch.mongodb.net/TaskManager?retryWrites=true&w=majority').then(() =>{
        console.log("Database Connection Complete")
    });
}
module.exports = DatabaseConnection;