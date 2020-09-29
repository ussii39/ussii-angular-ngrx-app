import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { Router, RouterModule } from '@angular/router';
import { UserService } from './service/user.service';
import { SidenavListComponent } from './side-nav/sidenav-list.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [HeaderComponent, SidenavListComponent],
  imports: [CommonModule, RouterModule, MatSidenavModule],
  exports: [HeaderComponent, SidenavListComponent, MatSidenavModule],
  providers: [AuthService, UserService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('エラーです');
    }
  }
}
