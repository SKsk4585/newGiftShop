import dal from "../2-utils/dal"
import AudienceModel from "../4-models/audienceModel"




async function getAllAudience(): Promise<AudienceModel[]>{
    const sql = `SELECT * FROM audience`
    const audience = await dal.execute(sql)
    return audience
}


export default {
    getAllAudience
}