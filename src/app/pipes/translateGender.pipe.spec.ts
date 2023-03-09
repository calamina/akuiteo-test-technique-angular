import { createPipeFactory, SpectatorPipe } from '@ngneat/spectator';
import { TranslateGenderPipe } from './translateGender.pipe';

describe("TranslateGenderPipe", () => {
  let spectator: SpectatorPipe<TranslateGenderPipe>;
  const createPipe = createPipeFactory(TranslateGenderPipe);

  test('should create', () => {
    spectator = createPipe();
    expect(spectator).toBeTruthy();
  });
  
  test('should translate "male" to "homme"', () => {
    const pipe = new TranslateGenderPipe();
    expect(pipe.transform('Male')).toBe('Homme');
  })

  test.skip('should translate "Male" to "Homme"', () => {
    spectator = createPipe(`{{ prop | translate }}`, {
      hostProps: {
        prop: 'Male'
      }
    });
		expect(spectator.element.querySelector("td.cdk-column-gender")).toBe("Homme");
  });
});
