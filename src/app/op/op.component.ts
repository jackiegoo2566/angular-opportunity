import { Component, ViewChild } from '@angular/core';
import { TableComponent } from '../table/table.component';

@Component({
  selector: 'app-op',
  template: `
    <div class="wrap">
      <div class="content content-wrap">
        <app-search (searchNameEvent)="searchNameEventParent($event)">
        </app-search>
        <app-table #table
          [searchName]="searchName"
          [listOpportunities]="dataToDisplay"
          [stringChanging]="randomString"
          (idToDelete)="deleteItemParent($event)"
          >
        </app-table>
      </div>
    </div>
  `
})
export class OpComponent {
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
  constructor() {
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