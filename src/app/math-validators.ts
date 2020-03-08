import {AbstractControl} from '@angular/forms';

export class MathValidators {
  static addition(target: string, sourceOne: string, sourceTwo: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const firsNumber = form.value[sourceOne];
      const secondNumber = form.value[sourceTwo];
      if (firsNumber + secondNumber === parseInt(sum)) {
        return null;
      }
      return {addition: true};
    };
  }
}
