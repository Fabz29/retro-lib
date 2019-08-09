import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Game} from '../../models/game.model';
import {GamesService} from '../../services/game/games.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.scss']
})
export class GameFormComponent implements OnInit {

  gameForm: FormGroup;
  fileUrl: string;

  constructor(private formBuilder: FormBuilder, private gameService: GamesService, private router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.gameForm = this.formBuilder.group({
      title: ['', Validators.required],
      console: ['', Validators.required],
      description: '',
      photo: '',
    });
  }

  onSubmitForm() {
    const formValue = this.gameForm.value;
    const game = new Game(formValue['title'], formValue['console']);
    game.description = formValue['description'];
    if (this.fileUrl && this.fileUrl !== '') {
      game.photo = this.fileUrl;
    }
    this.gameService.createGame(game);
    this.router.navigate(['/games/list']);
  }

  onUploadFile(file: File) {
    this.snackBar.open('Uploading...', 'close', {panelClass: 'primary'});
    this.gameService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.snackBar.open('Uploaded !', 'close', {panelClass: 'success'});
      }
    ).catch(
      error => {
        this.snackBar.open(error, 'close', {panelClass : 'warn'});
      }
    );
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }
}
