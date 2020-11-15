import { Component, OnInit } from '@angular/core';
import { CategoryItem } from '../service/category-item.model';
import { FetchDataService } from '../service/fetch-data.service';
import { FoodItem } from '../service/food-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  categories: CategoryItem[] = [];
  recipes: FoodItem[] = [];
  
  constructor(private fetchData:FetchDataService) { }

  ngOnInit(): void {
    this.categories = this.fetchData.categories;
    this.recipes = this.fetchData.menuItems;
  }

}
