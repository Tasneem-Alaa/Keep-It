import rateLimit from "../config/upstash.js"


const rateLimiter = async(req,res,next) => {
    //per user
    try{
        const {success} = await rateLimit.limit("my-limit-key") //put here user id instead
        if(!success){
            return res.status(429).json({
                message:"Too many requests, please try again later"
            })
        }
        next();
    }catch (e){
        console.log("Rate limit error",e)
        next(e)
    }
}

export default rateLimiter