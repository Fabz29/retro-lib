import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatSnackBarModule,
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule, MatSelectModule
} from '@angular/material';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {GameListComponent} from './game-list/game-list.component';
import {SingleGameComponent} from './game-list/single-game/single-game.component';
import {GameFormComponent} from './game-list/game-form/game-form.component';
import {HeaderComponent} from './header/header.component';
import {AuthService} from './services/auth/auth.service';
import {AuthGuardService} from './services/auth/auth-guard.service';
import {GamesService} from './services/game/games.service';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: 'auth/signup', component: SignupComponent},
  {path: 'auth/signin', component: SigninComponent},
  {path: 'games', component: GameListComponent},
  {path: 'games/new', component: GameFormComponent},
  {path: 'games/view/:id', component: SingleGameComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    GameListComponent,
    SingleGameComponent,
    GameFormComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [
    AuthService,
    AuthGuardService,
    GamesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
