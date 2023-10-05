import { Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { LoginFormComponent } from '../login-form/login-form.component';
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = Inject(Router);

  if (token) {
    return true
  } else {
   
    window.location.href = ''
    return false

  }

};
