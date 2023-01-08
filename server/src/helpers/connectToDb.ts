import mongoose from "mongoose";

export const connectToDb = async () => {
  const dbUri = process.env.MONGODB_URI;

  try {
    if (!dbUri) {
      throw new Error("Problem occured with environment variable MONGODB_URI!");
    }

    await mongoose.connect(dbUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log("DB connected");
  } catch (error) {
    console.error(error);
    console.error("Could not connect to db");
    process.exit(1);
  }
};
