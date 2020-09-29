import { User } from './user.model';
import { format } from 'date-fns';

export class Comment {
  initial: string;
  user: User;
  messeage: string;
  date: string;
  key?: string;
  isEdit?: boolean;

  constructor(values: any) {
    this.user = values.user;
    this.initial = values.initial || values.user.displayName.slice(0, 1);
    this.messeage = values.messeage;
    this.date = values.data || format(new Date());
    if (values.key) {
      this.key = values.key;
    }
  }
}
