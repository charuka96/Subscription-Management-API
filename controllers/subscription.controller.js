import Subcription from "../model/subscription.model.js"

export const createSubscription =async (req,res,next)=>{

    try {
        
const subscription = await Subcription.create({
    ...req.body,
    user:req.user_id, 
})

res.status(200).json({
    success:true,
    data:subscription
})
    } catch (error) {
        next(error);
    }
}