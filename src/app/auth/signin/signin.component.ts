import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
    });
  }

  onSubmitForm() {
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;
    this.authService.signIn(email, password).then(
      () => {
        this.snackBar.open('Success', 'close', {panelClass: 'success'});
        console.log();
        setTimeout(
          () => {
            this.router.navigate(['/games']);
          }, 2000
        );
      },
      (error) => {
        this.snackBar.open(error, 'close', {panelClass: 'error'});
        console.log(this.snackBar);
      }
    );
  }

}
