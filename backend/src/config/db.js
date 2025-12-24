import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("MONGODB CONNECTED SUCCESFULLY✅")
    } catch (e){
        console.log("Error connecting to MONGODB❌",e);
        process.exit(1); //exit with failure, and 0 means exit with succes
    }
}