import { CategoryItem } from './category-item.model';
import { FoodItem } from './food-item.model';

export class ResponseData {
    public categories: CategoryItem [];
    public recipes: FoodItem[];

    constructor (categories: CategoryItem [], recipes: FoodItem[] ) {
        this.categories = categories;
        this.recipes = recipes
    }
}