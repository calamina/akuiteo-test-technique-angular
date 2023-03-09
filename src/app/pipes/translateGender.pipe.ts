import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateGender'
})

export class TranslateGenderPipe implements PipeTransform {
  transform(gender: string): string {
    return gender === "Male" ? "Homme" : "Femme";
  }
}
