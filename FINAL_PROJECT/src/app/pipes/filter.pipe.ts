import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cardlist:any,type: string): any{
    if(type=="All")
     { 
      return cardlist;
     }
    return cardlist.filter((x:any)=>x.theme==type)
    
  }
  

}
