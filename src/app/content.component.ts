import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'content',
    template: `
        <div style="background: 'yellow';" (keydown)="onKeyDown($event)">
        <label>Input Text Component</label>
        <h1>{{content}}</h1>
        <button (click)="onClick()">Click Me</button>
        <h1>{{clickTime}}</h1>
        <input #box (keyup)="onKeyUp(box.value)" placeholder="input something"/>
        <h2>{{boxValue}}</h2>
        <input #boxEnter (blur)="onEnter(boxEnter.value)" (keyup.enter)="onEnter(boxEnter.value)" placeholder="input and press ENTER"/>
        <h2>{{enterValue}}</h2>
        </div>
    `,
})
export class ContentComponent {
    @Input()
    content: string;
    boxValue: string;
    enterValue: string;
    clickTime = 0;

    onKeyDown(event: any): void {
        switch(event.key) {
            case "ArrowUp":
                this.clickTime++;
                break;
            case "ArrowDown":
                this.clickTime--;
                break;
        }
    }

    onKeyUp(value: string): void {
        this.boxValue = value;
    }

    onEnter(value: string): void {
        this.enterValue = value;
    }

    onClick(): void {
        this.clickTime++;
    }
}
