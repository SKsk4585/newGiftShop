import express, { NextFunction, Request, Response } from "express"
import giftShopLogic from "../5-logic/giftShopLogic"

const router = express.Router()

//get all audience
router.get("/audience",async (request:Request,respons:Response,next:NextFunction)=>{
    try {
        const audience = await giftShopLogic.getAllAudience
        respons.json(audience)
    } 
    catch (error) {
        next(error)        
    }
})

export default router
