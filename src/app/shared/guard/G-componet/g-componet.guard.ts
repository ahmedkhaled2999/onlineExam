import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const gComponetGuard: CanActivateFn = (route, state) => {
  let platform = inject(PLATFORM_ID);
  let _reoute= inject(Router)
 if(isPlatformBrowser(platform)){
   if(localStorage.getItem('token')){
    return true
   }else{
    _reoute.navigate(['/auth/login']);
    return false
  }
 }else{
   return false
 }
};
