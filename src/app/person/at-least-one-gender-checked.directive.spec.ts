import { createDirectiveFactory, SpectatorDirective } from "@ngneat/spectator";
import { atLeastOneGenderCheckedValidatorDirective } from "./at-least-one-gender-checked.directive";

describe('atLeastOneGenderCheckedValidatorDirective', () => {
  let spectator: SpectatorDirective<atLeastOneGenderCheckedValidatorDirective>;
  const createDirective = createDirectiveFactory({
    directive: atLeastOneGenderCheckedValidatorDirective,
    template: `
		  <mat-checkbox class="Homme" formControlName="male">Homme</mat-checkbox>
		  <mat-checkbox class="Femme" formControlName="female">Femme</mat-checkbox>
      <p *ngIf="!generator.get('female').value && !generator.get('male').value">
        Veuillez sélectionner au moins un sexe
      </p>
    `
  });

  beforeEach(() => {
    spectator = createDirective();
  });

  test.skip('should get the instance', () => {
    expect(spectator.directive).toBeDefined();
  });

  test.skip('should have at least one checked', () => {
    spectator.dispatchMouseEvent(spectator.element.querySelector('.Homme'), 'click')
    spectator.dispatchMouseEvent(spectator.element.querySelector('.Femme'), 'click')

    expect(spectator.element.querySelector('p')).toBeDefined();
  });
});
