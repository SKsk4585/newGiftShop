import { OkPacket } from "mysql"
import dal from "../2-utils/dal"
import AudienceModel from "../4-models/audienceModel"
import GiftModel from "../4-models/giftsModel"




async function getAllAudience(): Promise<AudienceModel[]>{
    const sql = `SELECT * FROM audience`
    const audience = await dal.execute(sql)
    return audience
}

async function getGiftByAudienceTypes(audienceId:number): Promise<GiftModel[]>{
   const sql = `SELECT G.*, A.audienceType
                 FROM gifts AS G JOIN audience AS A
                 ON G.audienceId = A.audienceId
                 WHERE G.audienceId = ${audienceId}`;
   const gifts = await dal.execute(sql)
    return gifts

}

async function addGift(gifts:GiftModel): Promise<GiftModel>{
    const sql = `INSERT INTO gifts 
                VALUES(DEFAULT,
                    '${gifts.audienceId}'
                    '${gifts.giftName}'
                    '${gifts.Description}'
                    '${gifts.price}'
                    '${gifts.discount}'
                    )`
        const info:OkPacket = await dal.execute(sql)
        gifts.giftId = info.insertId
        return gifts
}


export default {
    getAllAudience,
    getGiftByAudienceTypes,
    addGift
}