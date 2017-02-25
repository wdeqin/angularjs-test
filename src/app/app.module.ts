import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContentComponent } from './content.component';
import { HeroFormComponent } from './hero-form.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
    ],
    declarations: [
        AppComponent,
        ContentComponent,
        HeroFormComponent,
    ],
    bootstrap: [
        AppComponent,
    ],
})
export class AppModule { }
