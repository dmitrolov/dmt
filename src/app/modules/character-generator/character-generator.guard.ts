import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {FirebaseService} from '../../core/firebase/firebase.service';

export class CharacterGeneratorGuard implements CanActivate {
  constructor(private firebaseService: FirebaseService) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const loggedIn = !!this.firebaseService.getCurrentUser();
    if (!loggedIn) {
      alert('sign in first');
    }
    return loggedIn;
  }
}
