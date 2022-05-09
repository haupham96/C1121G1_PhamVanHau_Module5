import {AbstractControl, ValidationErrors} from "@angular/forms";

export function minLength6(control: AbstractControl): ValidationErrors | null {
  let value = control.value;
  return value.length >= 6 ? null : {'min6':true};
}
