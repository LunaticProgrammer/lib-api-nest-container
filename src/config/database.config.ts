const dotenv = require('dotenv')
dotenv.config()
console.log(process.env.DATABASE_URL)
export const databaseConfig = {
    url: process.env.DATABASE_URL
}