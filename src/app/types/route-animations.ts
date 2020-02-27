import { trigger, transition, style, query, animate } from '@angular/animations';

export const fade = trigger('fadeAnimation', [
    transition('* <=> *', [
      // Set a default  style for enter and leave
      query(':enter, :leave', [
        style({
          position: 'fixed',
          left: 0,
          width: '100%',
          opacity: 0
        }),
      ], { optional: true }),
      // Animate the new page in
      query(':enter', [
        animate('500ms ease', style({ opacity: 1 })),
      ], { optional: true })
    ]),
])