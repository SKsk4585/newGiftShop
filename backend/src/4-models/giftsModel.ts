class GiftModel{
    public giftId: number
    public audienceId:number
    public giftName: string
    public Description: string
    public price: string
    public discount: string

    public constructor(gift: GiftModel){
        this.giftId = gift.giftId
        this.audienceId = gift.audienceId
        this.giftName = gift.giftName
        this.Description = gift.Description
        this.price = gift.price
        this.discount = gift.discount
    }
}

export default GiftModel