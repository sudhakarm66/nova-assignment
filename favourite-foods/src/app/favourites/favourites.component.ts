import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../service/fetch-data.service';
import { FoodItem } from '../service/food-item.model';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  favourites: FoodItem[] = []
  constructor(private fetchData: FetchDataService) { }

  ngOnInit(): void {
    this.favourites = this.fetchData.favourites;
  }

}
