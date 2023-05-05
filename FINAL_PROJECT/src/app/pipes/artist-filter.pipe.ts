import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'artistFilter'
})
export class ArtistFilterPipe implements PipeTransform {
  
  transform(cardlist:any,type1: string): any{
    if(type1=="All")
    {
      return cardlist;
    }
    return cardlist.filter((x:any)=>x.artist==type1)
  
  }

}
