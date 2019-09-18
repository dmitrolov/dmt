import {Injectable} from '@angular/core';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';
// // Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

import {Character} from '../../models/character/character.model';
import {Observable} from 'rxjs';
import {Item} from '../../models/equipment/item/item.model';
import {Player} from '../../models/player/player.model';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private db;
  private collections = {
    playersCharactersUrl: 'playerCharacters',
    items: 'items',
    players: 'players',
  };

  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
    this.db = firebase.firestore();
  }

  // AUTH
  createUserWithEmailAndPassword(email, password) {
    return new Observable(subscriber => {
      firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(response => {
          subscriber.next(response);
        })
        .catch((error) => {
          console.log('[FIREBASE REGISTRATION ERROR]', error.code, error.message);
        });
    });
  }

  signInWithEmailAndPassword(email, password) {
    return new Observable(subscriber => {
      firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(response => {
          console.log('User signed in');
          subscriber.next(response);
        })
        .catch((error) => {
          console.log('AUTH ERROR', error.code, error.message);
        });
    });
  }

  updateUserProfile(login: string, imageUrl: string = 'https://icon-library.net/images/default-user-icon/default-user-icon-8.jpg') {
    return new Observable(subscriber => {
      firebase.auth().currentUser
        .updateProfile({
          displayName: login,
          photoURL: imageUrl,
        })
        .then(response => {
          subscriber.next(response);
        })
        .catch((error) => {
          console.log('[FIREBASE USER PROFILE UPDATE ERROR]', error.code, error.message);
        });
    });
  }

  onAuthStateChanged() {
    return new Observable(subscriber => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          subscriber.next({
            displayName: this.getCurrentUser().displayName,
            photoURL: this.getCurrentUser().photoURL,
            signedIn: true,
          });
        } else {
          // No user is signed in.
          console.log('User is not signed in');
          subscriber.next({
            displayName: '%Username%',
            photoURL: 'https://icon-library.net/images/default-user-icon/default-user-icon-8.jpg',
            signedIn: false,
          });
        }
      });
    });
  }

  getCurrentUser() {
    return firebase.auth().currentUser;
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
    return this.db
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
      this.db
        .collection(this.collections.playersCharactersUrl)
        // .where('gettable', '==', true)
        .get()
        .then((characters) => {
          characters.forEach((character) => {
            subscriber.next({id: character.id, character: character.data()});
          });
        })
        .catch((error) => {
          console.log('Error getting documents: ', error);
        });
    });
  }

  onCharacterChanges(id: string) {
    return new Observable(subscriber => {
      this.db
        .collection(this.collections.playersCharactersUrl)
        .doc(id)
        .onSnapshot((character) => {
          subscriber.next(character.data().stats);
        });
    });
  }

  setItem(item: Item) {
    this.db
      .collection(this.collections.items)
      .doc(item.value)
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
      this.db
        .collection('items')
        .doc(id)
        .get()
        .then((item) => {
          subscriber.next(item.data());
        });
    });
  }

  setPlayer(player: Player) {
    this.db
      .collection(this.collections.players)
      .doc(player.login)
      .set(player)
      .then(() => {
        console.log('Player successfully written!');
      })
      .catch((error) => {
        console.error('Error writing player: ', error);
      });
  }
}
