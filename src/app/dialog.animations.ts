// dialog.animations.ts
import { trigger, transition, style, animate } from '@angular/animations';

export const dialogAnimation = trigger('dialogAnimation', [
    transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.7)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
    ]),
    transition(':leave', [
        animate('200ms ease-in', style({ opacity: 0, transform: 'scale(0.7)' }))
    ])
]);
