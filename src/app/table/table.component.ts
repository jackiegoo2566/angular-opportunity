import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() listOpportunities: any[]; // cái này là biến

  @Output() idToDelete = new EventEmitter<number>(); // cái này là sự kiện

  constructor() {
  }

  ngOnInit(): void {
  }

  // hàm delete của component con, khi user click vào nút xóa trên UI
  deleteItem(index: any): void {
    // khi bấm xóa trên UI 
    // => hàm này được gọi ngay
    this.idToDelete.emit(index);
    // khi này idToDelete sẽ được gán giá trị bằng id mình truyền vào
  }
}
