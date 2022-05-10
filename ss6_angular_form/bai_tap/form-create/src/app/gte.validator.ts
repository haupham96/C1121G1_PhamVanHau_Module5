import {AbstractControl, ValidationErrors} from "@angular/forms";

export function minLength6(control: AbstractControl): ValidationErrors | null {
  let value: string = control.value;

  if (value.length < 6) {
    return {min6: 'Min Length is 6'}
  }
  return null
}

export function age18(control: AbstractControl): ValidationErrors | null {
  let value = +control.value;

  if (isNaN(value)) {
    return {isNumber: 'Must be number'}
  }

  if (value < 18) {
    return {age18: 'Must be 18 years old'}
  }
  return null;
}
