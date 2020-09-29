import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from 'src/app/model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private router: Router,
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {}

  create(email: string, password: string): void {
    this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.db.object(`/users/${user.id}`).set(new User(user));
        this.router.navigate(['/users/new']);
      });
  }

  update(values) {
    this.afAuth.auth.currentUser.updateProfile(values).then(() => {
      this.db
        .object(`/users/${this.afAuth.auth.currentUser.uid}`)
        .update(values);
      this.router.navigate(['/']);
    });
  }
}
