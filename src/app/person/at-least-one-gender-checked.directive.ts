import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from "@angular/forms";

export const atLeastOneGenderCheckedValidator: ValidatorFn = (form: AbstractControl): ValidationErrors | null => {
  const male = form.get('male').value;  
  const female = form.get('female').value;

  return male || female ? null : {atLeastOneGenderCheckedValidator: true};
};

@Directive({
  selector: '[appAtLeastOneChecked]',
  providers: [{ provide: NG_VALIDATORS, useExisting: atLeastOneGenderCheckedValidatorDirective, multi: true }]
})
export class atLeastOneGenderCheckedValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return atLeastOneGenderCheckedValidator(control);
  }
}
