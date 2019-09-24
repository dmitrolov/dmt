import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../core/firebase/firebase.service';
import {Character} from '../../models/character/character.model';
import {error} from 'util';
import {User} from '../../models/user/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public initialUser = {
    login: '%Username%',
    imageUrl: 'https://icon-library.net/images/default-user-icon/default-user-icon-8.jpg',
    signedIn: false,
  };
  public currentUser = {...this.initialUser};
  public regUserForm = {
    email: '',
    password: '',
  };
  public allCharacters: { id: string, character: Character }[] = [];

  constructor(public firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.firebaseService.onUserChanged().subscribe((user: User) => {
      if (user) {
        this.currentUser.login = user.login;
        this.currentUser.imageUrl = user.imageUrl;
        this.currentUser.signedIn = true;
      } else {
        this.currentUser = this.initialUser;
      }
    });
  }

  signIn() {
    console.log(this.regUserForm.email, this.regUserForm.password);
    this.firebaseService.signInUser(this.regUserForm.email, this.regUserForm.password)
      .catch(e => {
        console.log('[ERROR IN USER SIGN IN]', e);
      })
      .finally(() => {
        console.log('[USER SIGNED IN SUCCESSFULLY]');
      });
  }

  getCurrentUser() {
    console.log(this.firebaseService.getCurrentUser());
  }
  signOutCurrentUser() {
    this.currentUser = this.initialUser;
    this.firebaseService.signOutCurrentUser()
      .finally(() => {
        console.log('[USER SIGNED OUT]');
      });
  }

}
