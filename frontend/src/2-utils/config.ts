class config{
    public getAllAudience = "http://localhost:3001/api/audience/"
    public getGiftByAudienceTypes = "http://localhost:3001/api/gifts-by-audience-id/"
    public addGift = "http://localhost:3001/api/gift/"
    public addedGift2 = "http://localhost:3001/api/gift/"
}

const appConfig = new config()

export default appConfig
