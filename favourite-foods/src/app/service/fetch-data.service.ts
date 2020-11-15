import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FoodItem } from './food-item.model';
import { CategoryItem } from './category-item.model';

import { map } from 'rxjs/operators'
import { ResponseData } from './api-data.model';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {
  apiUrl:String = 'http://temp.dash.zeta.in/food.php';
  favourites: FoodItem[] = [];
  menuItems: FoodItem[] = [];
  categories: CategoryItem[] = [];

  constructor(private http: HttpClient) {}

  fetchData () {
    return this.http.get<ResponseData>(`${this.apiUrl}`).pipe(
        map (responseData => {
          this.categories = responseData.categories;
          this.menuItems = responseData.recipes;
          return responseData
        }),
        map(responseData => {
          this.favourites = responseData.recipes.filter(item => item.isFavourite);
        })
      )
  }
}
