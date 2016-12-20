import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'hot'
})
export class HotPipe implements PipeTransform {

  transform(value) {
    if (value) {
      return value.sort((n1, n2) => n1 - n2);
    }
  }

}
