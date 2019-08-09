import {Game} from '../../models/game.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

export class GamesService {

  private games: Game[] = [];
  gameSubject = new Subject<Game[]>();

  constructor() {
    this.getGames();
  }

  emitGames() {
    this.gameSubject.next(this.games);
  }

  saveGames() {
    firebase.database().ref('/games').set(this.games);
  }

  getGames() {
    firebase.database().ref('/games').on('value', (data: DataSnapshot) => {
      this.games = data.val() ? data.val() : [];
      this.emitGames();
    });
  }

  getGame(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/games/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createGame(game: Game) {
    game.id = this.games.find[(this.games.length - 1)] ? this.games.find[(this.games.length - 1)].id + 1 : 0;
    this.games.push(game);
    this.saveGames();
    this.emitGames();
  }

  removeGame(game: Game) {
    const gameIndex = this.games.findIndex(
      (gameEl) => {
        if (game === gameEl) {
          return true;
        }
      }
    );

    this.games.splice(gameIndex, 1);
    this.saveGames();
    this.emitGames();
  }

}
