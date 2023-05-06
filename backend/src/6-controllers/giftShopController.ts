import express, { NextFunction, Request, Response } from "express"
import giftShopLogic from "../5-logic/giftShopLogic"
import GiftModel from "../4-models/giftsModel"

const router = express.Router()

//get all audience
router.get("/audience",async (request:Request,respons:Response,next:NextFunction)=>{
    try {
        const audience = await giftShopLogic.getAllAudience()
        respons.json(audience)
    } 
    catch (error) {
        next(error)        
    }
})

//get all gifts by audiencea type
router.get("/gifts-by-audience-id/:audienceId",async (request:Request,respons:Response,next:NextFunction)=>{
    try {
        const audienceId = +request.params.audienceId;
        const gifts = await giftShopLogic.getGiftByAudienceTypes(audienceId)
        respons.json(gifts)
    } 
    catch (error) {
        next(error)        
    }
})

//add gift
router.post("/gift",async (request:Request,response:Response,next:NextFunction)=>{
    try {
        const gift = new GiftModel(request.body)
        const addedGift = await giftShopLogic.addGift(gift)
        response.status(201).json(addedGift)
    } 
    catch (error) {
        next(error) 
       }
               
    })

export default router
