import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  
public data=[];

  constructor(private _dataservice : DataService) { }

  ngOnInit() {
    this._dataservice.get_products().subscribe(data => this.data =data);   
  }

}
