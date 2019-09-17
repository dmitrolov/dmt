import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: 'character-generator',
    loadChildren: () => import('./modules/character-generator/character-generator.module').then(m => m.CharacterGeneratorModule)
  },
  {
    path: 'character',
    loadChildren: () => import('./modules/character/character.module').then(m => m.CharacterModule),
    
  },
  { 
    path: 'sign-up', 
    loadChildren: () => import('./modules/sign-up/sign-up.module').then(m => m.SignUpModule) 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
