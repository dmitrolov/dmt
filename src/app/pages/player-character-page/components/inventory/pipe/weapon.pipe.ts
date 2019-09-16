import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weapon'
})
export class WeaponPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
