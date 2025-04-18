import exprees from 'express';
import {PORT} from './config/env.js'
import userRouter from './routes/user.routes.js'
import subcriptionRouter from './routes/subcription.routes.js'
import authRouter from './routes/auth.routes.js'
import conectDB from './database/mongodb.js';
import errorMedleware from './middlewares/error.middleware.js';
import cookieParser from 'cookie-parser';
import User from './model/user.model.js';
const app = exprees(); 


app.use(exprees.json());
app.use(exprees.urlencoded({extended:false}));
app.use(cookieParser());
app.use('/api/v1/auth',authRouter);
app.use('/api/v1/subcription',subcriptionRouter);
app.use('/api/v1/user',userRouter);
app.use(errorMedleware);

app.listen(PORT,  async()=>{
    console.log(`server is runing on port ${PORT}`)
     await conectDB();

})

export default app;

// pasword in mongodb =charukathisaru96