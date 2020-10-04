import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './service/user.service';
import { SidenavListComponent } from '../component/side-nav/sidenav-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from './service/auth.service';
import { MaterialModule } from '../material.module';
import { NewTraningComponent } from '../component/new-trainig/new-traning.component';

@NgModule({
  declarations: [HeaderComponent, SidenavListComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    SidenavListComponent,
    MatSidenavModule,
    MaterialModule,
    RouterModule,
  ],
  providers: [AuthService, UserService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('エラーです');
    }
  }
}
