import { Router } from "express";

const userRouter = Router();

userRouter.get('/',(req,res)=>res.send({title:'GET all user'}) );

userRouter.get('/:id' ,(req,res)=>res.send({title:'GET  user dealails'}) );

userRouter.post('/' ,(req,res)=>res.send({title:'create new user'}) );

userRouter.put('/:id' ,(req,res)=>res.send({title:'update user'}) );

userRouter.delete('/:id' ,(req,res)=>res.send({title:'delete  all user'}) );


export default userRouter;

