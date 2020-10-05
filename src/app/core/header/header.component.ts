import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';
import { Session } from 'src/app/model/session..model';
import { AuthService } from '../service/auth.service';
import * as fromRoot from '../../app.reducer';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  isAuth$: Observable<boolean>;
  login = false;
  loading = true;
  subscription: Subscription;

  constructor(
    private afAuth: AngularFireAuth,
    private store: Store<fromRoot.State>,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.authService.sessionState.subscribe(
      (session: Session) => {
        if (session) {
          this.login = session.login;

          console.log('開始');
          this.loading = false;
          setTimeout(() => {
            // ローディング終了
            this.loading = true;
          }, 1000);
          console.log('終了');
        }
      }
    );
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  logout() {
    this.authService.logout();
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
