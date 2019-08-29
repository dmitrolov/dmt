import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { PlayerCharacterGeneratorComponent } from './pages/player-character-generator/player-character-generator.component';
import { PlayerCharacterPageComponent } from './pages/player-character-page/player-character-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerCharacterGeneratorComponent,
    PlayerCharacterPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
