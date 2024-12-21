import { Pipe, PipeTransform } from '@angular/core';
import { Subjectres } from '../services/subject/interfaces/subjectRes/subject-res';

@Pipe({
  name: 'filterbyname',
  standalone: true
})
export class FilterbynamePipe implements PipeTransform {

  transform(Product: Subjectres[], searchkey:string): Subjectres[] {
    return  Product.filter(ele=>ele.name.toLowerCase().includes(searchkey.toLowerCase()));
      }
}
