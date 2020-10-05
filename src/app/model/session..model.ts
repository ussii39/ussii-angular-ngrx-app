import { User } from './user.model';

export class Session {
  login: boolean;
  user: User;

  constructor() {
    this.login = false;
  }

  reset(): Session {
    this.login = false;
    return this;
  }
}

export class Session2 {
  login: boolean;
  user: User;

  constructor() {
    this.login = false;
  }

  reset(): Session {
    this.login = false;
    return this;
  }
}
