import axios from "axios";
import AudienceModel from "../3-models/audienceModel";
import appConfig from "../2-utils/config";
import GiftModel from "../3-models/giftsModels";




class GifService{
public async  getAllAudience(): Promise<AudienceModel[]>{
    const response = await axios .get<AudienceModel[]>(appConfig.getAllAudience)
    const audience = response.data
    return audience


}

public async getGiftByAudienceTypes(audienceId:number): Promise<GiftModel[]>{
   const sql = `SELECT G.*, A.audienceType
                 FROM gifts AS G JOIN audience AS A
                 ON G.audienceId = A.audienceId
                 WHERE G.audienceId = ${audienceId}`;
   const gifts = await dal.execute(sql)
    return gifts

}

public async addGift(gifts:GiftModel): Promise<GiftModel>{
    const response = await axios.post<GiftModel>(appConfig.addGift)
    const book = response.data
    return book
}

}
export default {
    getAllAudience,
    getGiftByAudienceTypes,
    addGift
}