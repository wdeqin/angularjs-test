import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
    moduleId: module.id,
    selector: 'hero-form',
    templateUrl: './hero-form.component.html',
    styleUrls: [ './hero-form.component.css' ],
})
export class HeroFormComponent {
    powers = [
        'Really Smart',
        'Super Hot',
        'Weather Changer',
        'Time Controlling',
        'Flashing',
    ];

    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chunk Overstree');

    submitted = false;

    onSubmit(): void {
        this.submitted = true;
    }

    get diagnostic(): string {
        return JSON.stringify(this.model);
    }
}

