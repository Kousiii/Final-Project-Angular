import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artType'
})
export class ArtTypePipe implements PipeTransform {

  transform(cardlist:any,type2: string): any{ 
    if(type2=="All")
    {
      return cardlist;
    }
    return cardlist.filter((x:any)=>x.type==type2)
    
  }

}
