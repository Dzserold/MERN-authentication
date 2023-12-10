import mongoose from "mongoose";

const conectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch ({ err }) {
    console.err(`Error: ${err.message || err}`);
    process.exit(1);
  }
};

export default conectDB;
