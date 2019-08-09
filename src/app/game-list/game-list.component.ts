import {Component, OnInit, ViewChild} from '@angular/core';
import {GamesService} from '../services/game/games.service';
import {Game} from '../models/game.model';
import {Subscription} from 'rxjs';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  games: Game[];
  gameSubscription: Subscription;
  displayedColumns: string[] = ['title', 'console', 'action'];
  dataSource = new MatTableDataSource<Game>(this.games);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private gameService: GamesService) {
  }

  ngOnInit() {
    this.gameSubscription = this.gameService.gameSubject.subscribe(
      (games: Game[]) => {
        this.games = games;
      });

    this.gameService.emitGames();
    this.dataSource.paginator = this.paginator;
  }

  onDeleteGame(game: Game) {
    this.gameService.removeGame(game);
  }

}
