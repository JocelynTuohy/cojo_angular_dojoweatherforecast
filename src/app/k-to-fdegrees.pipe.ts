import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kToFDegrees'
})
export class KToFDegreesPipe implements PipeTransform {

  transform(kelvin): any {
    return (kelvin * (9/5)) - 459.67;
  }

}
