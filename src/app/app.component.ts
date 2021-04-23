import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild('table') table: TableComponent;

  dataOriginal = [
    {
    "name": "bid opportunity 1",
    "status": "active",
    "customer": "FPT",
    "date": "",
    },
    {
    "name": "bid opportunity 2",
    "status": "pending",
    "customer": "VNG",
    "date": "",
    },
    {
    "name": "bid opportunity 3",
    "status": "active",
    "customer": "VNPT",
    "date": "",
    },
    {
    "name": "bid opportunity 4",
    "status": "active",
    "customer": "VNPT",
    "date": "",
    },
    {
    "name": "bid opportunity 5",
    "status": "active",
    "customer": "VNPT",
    "date": "",
    },
    {
    "name": "bid opportunity 6",
    "status": "pending",
    "customer": "FPT",
    "date": "",
    },
    {
    "name": "bid opportunity 7",
    "status": "cancelled",
    "customer": "VNPT",
    "date": "",
    },
    {
    "name": "bid opportunity 8",
    "status": "cancelled",
    "customer": "VNPT",
    "date": "",
    }
  ];
  dataToDisplay = [];
  randomString = '';

  searchName = '';

  constructor(
  ) {
    this.dataToDisplay = this.dataOriginal;
  }

  ngOnInit() {
  }

  deleteItemParent(id: any) {
    this.dataToDisplay.splice(id, 1);
  }

  searchNameEventParent(name: string) {
    this.searchName = name;
  }
}
