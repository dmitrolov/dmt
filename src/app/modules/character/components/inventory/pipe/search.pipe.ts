import { Pipe, PipeTransform } from '@angular/core';
import {Item} from '../../../../../models/equipment/item/item.model';
import {PlayerEquipmentView} from '../inventory.component';
import {MatTableDataSource} from '@angular/material';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tableData: MatTableDataSource<PlayerEquipmentView>, searchString: string): any {
    // check if searchString undefined
    if (searchString === undefined || searchString === '') {return tableData; }
    return  tableData.data.filter(item => {
      console.log('[tableData.data]', tableData.data);
      console.log('[item]', item);
      return item.title.ru.toString().toLowerCase().includes(searchString.toLowerCase())
        || item.title.en.toString().toLowerCase().includes(searchString.toLowerCase())
        || item.value.toString().toLowerCase().includes(searchString.toLowerCase());
    });
  }

}
