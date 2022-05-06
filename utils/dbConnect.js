import mongoose from 'mongoose'

let isConnected = false;

const DB_URL = process.env.DB_URL


if (!DB_URL) {
  throw new Error(
    'Please define the DB_URL environment variable inside .env.local'
  )
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export const dbConnect = async () => {
    if (!isConnected) {      
        await mongoose.connect(DB_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            bufferCommands: false,
            // bufferMaxEntries: 0,
            // useFindAndModify: true,
            // useCreateIndex: true
        }).then(mongoose => {
            return mongoose
        })
    }
}