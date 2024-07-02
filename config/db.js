import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try{
    const conn=await mongoose.connect(process.env.MONGO_URL);
    console.log('connected to ${conn.connection.host}');
  }
  catch(error){console.log(`error in mongodb`);
}
  //await mongoose.connect("mongodb+srv://bishwasritik07:wnFzKjJVInHjfhHG@cluster0.4bxa5qp.mongodb.net/ecommerceapp").then(()=>{console.log("connected");
//});
};

export default connectDB;
