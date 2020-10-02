import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Session } from 'src/app/model/session..model';

@Injectable()
export class AuthService {
  session = new Session();
  sessionSubject = new Subject<Session>();
  sessionState = this.sessionSubject.asObservable();

  constructor(private router: Router, private afAuth: AngularFireAuth) {}

  // sublogin() {
  //   this.session.login = true;
  //   this.sessionSubject.next(this.session);
  //   this.router.navigate(['/']);
  // }

  // sublogout() {
  //   this.session.login = false;
  //   this.sessionSubject.next(this.session);
  //   this.router.navigate(['/login']);
  // }

  login(email: string, password: string): void {
    this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.router.navigate(['/']);
      })
      .catch((error) => console.error(error));
  }

  logout(): void {
    this.afAuth.auth
      .signOut()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch((error) => console.error(error));
  }
}
