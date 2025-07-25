import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ranganath:ranga266@cluster0.o58uw.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};