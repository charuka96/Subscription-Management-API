import mongoose from "mongoose";
import { DB_URI,NODE_ENV } from "../config/env.js";

if(!DB_URI){
    throw new Error("plase define MONGODB_URI enviroment variable inside .env.<development/production>.local ")
}

const conectDB = async ()=>{
    try {
        
 await mongoose.connect(DB_URI);
 console.log(`conected to the database in ${NODE_ENV} mode`)

    } catch (error) {

        console.error( 'Conecting to the error database', error);
        process.exit(1)
    }
}
export default conectDB;