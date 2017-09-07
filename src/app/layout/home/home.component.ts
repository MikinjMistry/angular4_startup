import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dtOptions: DataTables.Settings = {};  
  constructor() { }

  ngOnInit() {
    	this.dtOptions = {
	      pagingType: 'full_numbers'
	    };
    }

}
