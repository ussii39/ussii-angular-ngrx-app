import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ChatComponent } from './component/chat/chat.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { NotFindComponent } from './error/not-find/not-find.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { StoreModule } from '@ngrx/store';
import { FlexLayoutModule } from '@angular/flex-layout';
import { reducers } from './app.reducer';
import { AuthModule } from './auth/auth.module';
import { TrainingModule } from './component/both-traning/training.module';
import { AuthService } from './core/service/auth.service';
import { UserService } from './core/service/user.service';
import { MyNewPipePipe } from './my-new-pipe.pipe';

@NgModule({
  declarations: [AppComponent, ChatComponent, NotFindComponent, MyNewPipePipe],
  imports: [
    AngularFireDatabaseModule,
    FlexLayoutModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    CommonModule,
    SharedModule,
    CoreModule,
    AuthModule,
    AppRoutingModule,
    FormsModule,
    TrainingModule,
    MaterialModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  providers: [AuthService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule {}
