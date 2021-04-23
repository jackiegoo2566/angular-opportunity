import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'filterNameForTable'
})
export class FilterNameForTable implements PipeTransform {
  transform(value: any[], searchText?: string): any[] {
    if (searchText == null || searchText == '') {
      return value;
    }

    let rs = [];

    for (let i = 0; i < value.length; i++) {
      if (value[i].name.includes(searchText)) {
        rs.push(value[i]);
      }
    }

    return rs;
  }
}