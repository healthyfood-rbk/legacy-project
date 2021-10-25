import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any , valueholder : any){
   if(valueholder === 0){
     return value
   }
var data = [];
for(var element of value){
if(element.name.includes(valueholder)){
  data.push(element)
}
}
console.log(data)
return data
  }



}
