import { CanActivateFn } from '@angular/router';

export const roleGuard: CanActivateFn = (route:any, state) => {
  const role=route.data.role;
  if(role==='0'){
    return true
  }else{
    return false
  }
};
