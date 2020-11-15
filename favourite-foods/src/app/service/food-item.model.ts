export class FoodItem {
    public name: string;
    public image: string;
    public price: number;
    public category: string;
    public rating: number;
    public reviews: number;
    public details: string;
    public isFavourite: boolean;

    constructor(
        name: string,
        image: string,
        price: number,
        category: string,
        rating: number,
        reviews: number,
        details: string,
        isFavourite: boolean
    ) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.category = category;
        this.rating = rating;
        this.reviews = reviews;
        this.details = details;
        this.isFavourite = isFavourite;
    }
}