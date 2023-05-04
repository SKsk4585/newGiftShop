class AudienceModel{
    public audienceId:number
    public audienceType:string

    public constructor (audience: AudienceModel){
        this.audienceId = audience.audienceId
        this.audienceType = audience.audienceType
    }
}

export default AudienceModel