import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Object;
  h1Style = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(data => {
      this.users = data;
      console.log('data', data);
    });
  }

  firstClick() {
    console.log('Click');
    this.h1Style = this.dataService.firstClick(this.h1Style);


  }
}
