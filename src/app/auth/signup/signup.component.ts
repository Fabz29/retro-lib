import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../services/auth/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private snackBar: MatSnackBar, private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]
    });
  }

  onSubmitForm() {
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;
    this.authService.createNewAuth(email, password).then(
      () => {
        this.snackBar.open('Auth created', 'success', {panelClass: 'success'});
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
