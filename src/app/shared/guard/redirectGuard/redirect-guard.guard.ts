import { CanActivateFn } from '@angular/router';

export const redirectGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
