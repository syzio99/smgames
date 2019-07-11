import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], term): any {
    return term ? items.filter(
      item => {
        let products = item.payload.val().productName;
        if(term !== undefined && products !== undefined){
          term = term.toLowerCase();
          products =products.toLowerCase();
        }
          return products.indexOf(term) !== -1  
      }
    ): items;
}

}
