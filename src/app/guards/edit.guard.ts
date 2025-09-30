import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { EditServiceService } from '../service/edit-service.service';

export const editGuard: CanActivateFn = (route, state) => {

  const editSrv = inject(EditServiceService);
  const router = inject(Router);

  if (editSrv.isLoging()) {
    return true;
  } else {
    router.navigate(['/login'], { queryParams: { routerUrl: state.url } })
    return false;
  }

};
