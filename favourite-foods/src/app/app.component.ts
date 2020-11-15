import { Component, OnInit } from '@angular/core';
import { FetchDataService } from './service/fetch-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'favourite-foods';
  isLoading:boolean = true;

  constructor (private fetchDataService: FetchDataService) {}

  ngOnInit () {
    this.fetchDataService.fetchData().subscribe(response => {
      // Can add a loader (probably a gif image and show the image till data is received);
      this.isLoading = false;
    })
  }
}
