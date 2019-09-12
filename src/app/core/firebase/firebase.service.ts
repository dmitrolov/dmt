import {Injectable} from '@angular/core';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app';

// // Add the Firebase products that you want to use
// import 'firebase/auth';
import 'firebase/firestore';
import {PlayerCharacter} from '../../../assets/data/character/playerCharacter.model';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private firebaseConfig = {
    apiKey: 'AIzaSyCBJLGUwm3Gudef3OmMpTr4_kuAKojdHKI',
    authDomain: 'dnd-master-tools.firebaseapp.com',
    databaseURL: 'https://dnd-master-tools.firebaseio.com',
    projectId: 'dnd-master-tools',
    storageBucket: '',
    messagingSenderId: '338033505662',
    appId: '1:338033505662:web:ded866bbf17722c7'
  };
  private db;
  private collections = {
    playersCharactersUrl: 'playerCharacters',
  };

  constructor() {
    firebase.initializeApp(this.firebaseConfig);
    this.db = firebase.firestore();
  }

  writePlayerCharacter(character: PlayerCharacter) {
    return this.db
      .collection(this.collections.playersCharactersUrl)
      .doc(`${character.characterInfo.mainInfo.playerName}_${character.characterInfo.mainInfo.characterName}`)
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
  //
  // getAllPlayersCharacters() {
  //   this.db
  //     .collection(this.collections.playersCharactersUrl)
  //     // .where('gettable', '==', true)
  //     .get()
  //     .then((characters) => {
  //       characters.forEach((character) => {
  //         console.log(character.id, ' => ', character.data());
  //       });
  //     })
  //     .catch((error) => {
  //       console.log('Error getting documents: ', error);
  //     });
  // }
  //
  // getPlayerCharacterById(id: string) {
  //   return this.db
  //     .collection(this.collections.playersCharactersUrl)
  //     .doc(id)
  //     // .where('gettable', '==', true)
  //     .get()
  //     .then((character) => {
  //       if (character.exists) {
  //         console.log('Document data:', character.data());
  //         return character.data();
  //       } else {
  //         // doc.data() will be undefined in this case
  //         console.log('No such document!');
  //       }
  //     })
  //     .catch((error) => {
  //       console.log('Error getting documents: ', error);
  //     });
  // }
  //
  // subscribeOnDBChanges() {
  //   return this.db
  //     .collection(this.collections.playersCharactersUrl)
  //     .onSnapshot((characters) => {
  //       characters.forEach((character) => {
  //         console.log(character.id, ' => ', character.data(), new Date().getTime());
  //       });
  //     });
  // }
  //
  // subscribeOnCharacterChanges(id: string) {
  //   return this.db
  //     .collection(this.collections.playersCharactersUrl)
  //     .doc(id);
  // }
  //
  // subscribeOnCharacterChangesTest(id: string) {
  //   return this.db
  //     .collection(this.collections.playersCharactersUrl)
  //     .doc(id)
  //     .onSnapshot((character) => {
  //       return character.data().stats;
  //     });
  // }

  getCharacterChanges(id: string) {
    return new Observable(subscriber => {
      this.db
        .collection(this.collections.playersCharactersUrl)
        .doc(id)
        .onSnapshot((character) => {
          subscriber.next(character.data().stats);
        });
    });
  }
}
