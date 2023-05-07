const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  try {
    console.log(databaseUrl)
    await mongoose.connect("mongodb+srv://chuper:XafbgpFETnHO2Hg0@cluster0.wmwyqo1.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
