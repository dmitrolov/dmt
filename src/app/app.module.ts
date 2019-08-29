import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {PlayerCharacterGeneratorComponent} from './pages/player-character-generator/player-character-generator.component';
import {PlayerCharacterPageComponent} from './pages/player-character-page/player-character-page.component';

const appRoutes: Routes = [
  {
    path: 'player-character-generator',
    component: PlayerCharacterGeneratorComponent,
  },
  {
    path: 'player-character/:id',
    component: PlayerCharacterPageComponent,
  },

];

@NgModule({
  declarations: [
    AppComponent,
    PlayerCharacterGeneratorComponent,
    PlayerCharacterPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
