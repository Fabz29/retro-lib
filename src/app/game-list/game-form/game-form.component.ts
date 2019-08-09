import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Game} from '../../models/game.model';
import {GamesService} from '../../services/game/games.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

  gameForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private gameService: GamesService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.gameForm = this.formBuilder.group({
      title: ['', Validators.required],
      console: ['', Validators.required],
      description: '',
    });
  }

  onSubmitForm() {
    const formValue = this.gameForm.value;
    const game = new Game(formValue['title'], formValue['console']);
    game.description = formValue['description'];
    this.gameService.createGame(game);
    this.router.navigate(['/games/list']);
  }
}
