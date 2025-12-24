import express from 'express';
import dotenv from "dotenv"
import {connectDB} from "./config/db.js"
import notesRoutes from "./routes/noteRoutes.js"
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config();

const app = express();

//middleware allow us to get access to req.body and will parse JSON bodies
app.use(express.json());
app.use(rateLimiter);

// our simple custom middleware
// app.use((req,res,next)=>{
//     console.log(`Request mrthod is ${req.method} & Req URL is ${req.url}`)
//     next();
// })

app.use("/api/notes", notesRoutes);

const port = process.env.PORT; 

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log('Server is running on port:',port);
    })
})

