import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const DBconnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGOOSECONNECTIONURL}/${DB_NAME}`
    );
    console.log("\n Database Connection Successfull || HOSTNAME: ",connectionInstance.connection.host)
  } catch (error) {
    console.log("Moongose connection error", error);
    process.exit(1);
  }
};

export default DBconnection;
