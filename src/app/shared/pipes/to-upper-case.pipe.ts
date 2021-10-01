import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpperCase'
})
export class ToUpperCasePipe implements PipeTransform {
  transform(value: String, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }
}
