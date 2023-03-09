import { animate, animateChild, query, style, transition, trigger, group } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('personnes => apropos', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: '1rem',
          left: '1rem',
        })
      ]),
      query(':enter', [
        style({ transform: 'translateX(-100vw)' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('400ms ease-out', style({ transform: 'translateX(100vw)' }))
        ]),
        query(':enter', [
          animate('400ms ease-out', style({ transform: 'translateX(0)' }))
        ]),
      ]),
    ]),
    transition('apropos => personnes', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: '1rem',
          left: '1rem',
        })
      ]),
      query(':enter', [
        style({ transform: 'translateX(100vw)' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('400ms ease-out', style({ transform: 'translateX(-100vw)' }))
        ]),
        query(':enter', [
          animate('400ms ease-out', style({ transform: 'translateX(0)' }))
        ]),
      ]),
    ]),
  ]);
