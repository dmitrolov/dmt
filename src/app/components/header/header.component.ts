import {Component, OnInit} from '@angular/core';
import {FirebaseService} from '../../core/firebase/firebase.service';
import {Character} from '../../models/character/character.model';

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
  public regUser = {
    email: '',
    password: '',
  };
  public allCharacters: { id: string, character: Character }[] = [];

  constructor(public firebaseService: FirebaseService) {
  }

  ngOnInit() {
    this.firebaseService.onAuthStateChanged().subscribe(({displayName, photoURL, signedIn}) => {
      console.log('[HEADER USER]', displayName);
      if (signedIn) {
        this.currentUser = {login: displayName, imageUrl: photoURL, signedIn};
      } else {
        this.currentUser = this.initialUser;
      }
    });

    this.firebaseService.getAllPlayersCharacters().subscribe(({id, character}) => {
      console.log(id, character);
      this.allCharacters.push({id, character});
    });
  }

  signIn() {
    console.log(this.regUser.email, this.regUser.password);
    this.firebaseService.signInWithEmailAndPassword(this.regUser.email, this.regUser.password).subscribe(response => {
      console.log('response', response);
    });
    console.log('done');
  }

}
