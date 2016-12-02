import { UserActions } from './user/user.actions';
import { UserService } from './user/user.service';

import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { ConfigService } from './config.service';

export const APP_PROVIDERS = [
  AuthGuardService,
  AuthService,
  ConfigService,
  UserActions,
  UserService
];
