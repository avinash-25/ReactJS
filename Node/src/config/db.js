import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log("Database connected successfully..!");
  } catch (error) {
    console.log("Database not connected", error.message);
    process.exit(1);
  }
};
