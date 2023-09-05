import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'src/app/data/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.authService.isAuthenticated())
    if (!this.authService.isAuthenticated()) {
      if(state.url === '/auth') {
        return true
      } else if(state.url === '/custom') {
        this.router.navigate(['/auth'])
      }
      return false; 
    } else if (state.url === '/auth') {
      this.router.navigate(['/custom']); 
      return false; 
    }
    return true;
  }
  
}
