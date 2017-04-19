import { Pipe, PipeTransform } from '@angular/core';

/*
  # Description:

  Repackages an array subset as a new array.

  **Reasoning:**

  Angular2's change checker freaks out when you ngFor an array that's a subset
    of a larger data structure.

  # Usage:
  ``
  <div *ng-for="#value of arrayOfObjects | derp"> </div>
  ``
*/
@Pipe({ name: 'derp' })
export class DerpPipe implements PipeTransform {
  transform (val: any, args: any) {
        return Array.isArray(val)
          ? val : [ val ];
  }
}