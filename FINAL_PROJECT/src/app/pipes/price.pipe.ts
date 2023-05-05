import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(artcard: any, min: any,max:any): any{
    return artcard.filter(
      (x:any)=>(x.price)>=min && (x.price)<=max
    )
  }

}
