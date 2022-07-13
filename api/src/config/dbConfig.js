import mongoose from "mongoose";

export const dbConnect = () => {
  try {
    const MONGO_CLIENT = "mongodb://localhost/march_task_list";
    const con = mongoose.connect(MONGO_CLIENT);
    con && console.log("connected to mongo");
  } catch (error) {
    console.log(error);
  }
};

// export default dbConnect;
