import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Session } from 'src/app/model/session..model';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  login = false;
  constructor(
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.sessionState.subscribe((session: Session) => {
      if (session) {
        this.login = session.login;
      }
    });
  }
  sublogout() {
    this.authService.sublogout();
  }
}
