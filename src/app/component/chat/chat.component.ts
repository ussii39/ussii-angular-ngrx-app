import { Component, OnInit } from '@angular/core';
import { Comment } from '../../model/comment.model';
import { User } from '../../model/user.model';
import { Directive } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

// const CURRENT_USER: User = new User(1, '始皇帝');
// const ANOTHER_USER: User = new User(2, '溥儀');

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent {
  comments: Comment[];
  commentsRef: AngularFireList<any>;
  currentUser: User;
  // anotherUser = ANOTHER_USER;
  comment = '';

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) {
    this.commentsRef = this.db.list('/comments');
  }

  ngOnInit() {
    if (this.afAuth.auth.currentUser) {
      this.currentUser = new User(this.afAuth.auth.currentUser);
    } else {
      this.afAuth.auth.onAuthStateChanged((user) => {
        if (user) {
          this.currentUser = new User(this.afAuth.auth.currentUser);
        }
      });
    }
    this.commentsRef.snapshotChanges().subscribe((snapshots) => {
      this.comments = snapshots.map((snapshot) => {
        const values = snapshot.payload.val();
        return new Comment({ key: snapshot.payload.key, ...values });
      });
    });
  }

  addComment(comment: string) {
    if (comment) {
      this.commentsRef.push(
        new Comment({ user: this.currentUser, messeage: comment })
      );
      this.comment = '';
    }
  }

  toggleEditComment(index: number): void {
    this.comments[index].isEdit = !this.comments[index].isEdit;
  }

  saveEditComment(index: number, key: string) {
    this.commentsRef
      .update(key, {
        messeage: this.comments[index].messeage,
        date: this.comments[index].date,
      })
      .then(() => {
        this.comments[index].isEdit = false;
      });
  }

  deleteComment(key: string): void {
    this.commentsRef.remove(key);
  }
}
