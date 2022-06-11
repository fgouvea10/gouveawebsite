import mongoose from 'mongoose';

export function createConnection() {
  if (process.env.DATABASE_LOCAL_URL) {
    return mongoose
      .connect(process.env.DATABASE_LOCAL_URL)
      .then((connection) =>
        console.log(
          `MongoDB database connected successfully with host ${connection.connection.host}`
        )
      );
  }

  return console.error('Failed to connect to MongoDB database');
}
