import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  const authSrv = inject(AuthService)
  const router = inject(Router)
  if (authSrv.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login'], { queryParams: { routerUrl: state.url } })
    return false;
  }

};

