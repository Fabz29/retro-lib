import { Component, OnInit } from '@angular/core';
import {GamesService} from '../../services/game/games.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Game} from '../../models/game.model';

@Component({
  selector: 'app-single-game',
  templateUrl: './single-game.component.html',
  styleUrls: ['./single-game.component.scss']
})
export class SingleGameComponent implements OnInit {

  game: Game;

  constructor(private gameService: GamesService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.gameService.getGame(this.router.snapshot.params['id']).then(
      (game: Game) => {
        this.game = game;
      }
    );
  }

}
