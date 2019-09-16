import { Pipe, PipeTransform } from '@angular/core';
import {Item} from '../../../../../models/equipment/item/item.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: {item: Item, count: number}[], searchString: string): any {
    // check if searchString undefined
    if (searchString === undefined || searchString === '') {return items; }
    return  items.filter(item => {
      return item.item.title.ru.toString().toLowerCase().includes(searchString.toLowerCase())
        || item.item.title.en.toString().toLowerCase().includes(searchString.toLowerCase())
        || item.item.value.toString().toLowerCase().includes(searchString.toLowerCase());
    });
  }

}
