import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-opportunity';

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

  constructor() {
    this.dataToDisplay = this.dataOriginal;
  }

  // search() {
  //   if (this.searchData.Name == '' &&
  //       this.searchData.Status == '' &&
  //       this.searchData.Customer == '') {
  //     this.dataToDisplay = this.dataOriginal
  //   }

  //   this.dataToDisplay = [];

  //   for (let i = 0; i < this.dataOriginal.length; i++) {
  //     let currentData = this.dataOriginal[i];

  //     if (currentData.name.toLowerCase().includes(this.searchData.Name.toLowerCase()) &&
  //         currentData.status.toLowerCase().includes(this.searchData.Status.toLowerCase()) &&
  //         currentData.customer.toLowerCase().includes(this.searchData.Customer.toLowerCase())
  //     ) {
  //       this.dataToDisplay.push(currentData);
  //     }
  //   }
  // }

  // hàm delete item của component cha
  

  deleteItemParent(id: any) {
    // hàm này chạy cuối cùng,
    // sau khi đã nhận được sự kiện từ template HTML

    // nhận được id từ thằng con
    this.dataToDisplay.splice(id, 1);
  }
}
