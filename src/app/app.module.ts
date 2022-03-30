import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterGeneratorComponent } from './character-generator/character-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterGeneratorComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
