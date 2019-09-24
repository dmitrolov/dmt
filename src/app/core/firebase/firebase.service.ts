import {Injectable} from '@angular/core';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';
// // Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

import {Character} from '../../models/character/character.model';
import {Observable} from 'rxjs';
import {Item} from '../../models/equipment/item/item.model';
import {environment} from '../../../environments/environment';
import {User} from '../../models/user/user.model';


@Injectable({
  providedIn: 'root'
})

export class FirebaseService {
  private collections = {
    users: 'users',
    adventures: 'adventures',
    items: 'items',

    playersCharactersUrl: 'playerCharacters',
  };

  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
  }

  signUpUser(email, password) {
    return firebase.auth()
      .createUserWithEmailAndPassword(email, password);
  }

  setUser(user: User) {
    return firebase.firestore()
      .collection(this.collections.users)
      .doc(user.email)
      .set(user);
  }

  signInUser(email, password) {
    return firebase.auth()
      .signInWithEmailAndPassword(email, password);
  }

  onUserChanged() {
    return new Observable<User>(subscriber => {
      firebase.auth().onAuthStateChanged(authUser => {
        if (authUser) {
          this.getUser(authUser.email)
            .then(dbUser => {
              // @ts-ignore
              const currentUser: User = dbUser.data();
              subscriber.next(currentUser);
            });
        } else {
          subscriber.next(null);
        }
      });
    });
  }

  getUser(email: string) {
    return firebase.firestore()
      .collection(this.collections.users)
      .doc(email)
      .get();
  }

  getCurrentUser() {
    return firebase.auth().currentUser;
  }

  signOutCurrentUser() {
    return firebase.auth().signOut();
  }

  signOut() {
    firebase.auth()
      .signOut()
      .catch((error) => {
        console.log('[FIREBASE USER SIGN OUT ERROR]', error.code, error.message);
      });
  }

  // DATABASE
  setPlayerCharacter(character: Character) {
    return firebase.firestore()
      .collection(this.collections.playersCharactersUrl)
      .doc(`${character.about.info.playerName}_${character.about.info.characterName}`)
      .set({
        stats: character
      })
      .then(() => {
        console.log('Document successfully written!');
      })
      .catch((error) => {
        console.error('Error writing document: ', error);
      });
  }

  getAllPlayersCharacters() {
    return new Observable(subscriber => {
      firebase.firestore()
        .collection(this.collections.playersCharactersUrl)
        // .where('gettable', '==', true)
        .onSnapshot((characters) => {
          characters.forEach((character) => {
            subscriber.next({id: character.id, character: character.data()});
          });
        });
    });
  }

  onCharacterChanges(id: string) {
    return new Observable(subscriber => {
      firebase.firestore()
        .collection(this.collections.playersCharactersUrl)
        .doc(id)
        .onSnapshot((character) => {
          subscriber.next(character.data().stats);
        });
    });
  }

  setItem(item: Item) {
    firebase.firestore()
      .collection(this.collections.items)
      .doc(item.id)
      .set(item)
      .then(() => {
        console.log('Item successfully written!');
      })
      .catch((error) => {
        console.error('Error writing item: ', error);
      });
  }

  getItem(id: string) {
    return new Observable(subscriber => {
      firebase.firestore()
        .collection('items')
        .doc(id)
        .get()
        .then((item) => {
          subscriber.next(item.data());
        });
    });
  }
}
