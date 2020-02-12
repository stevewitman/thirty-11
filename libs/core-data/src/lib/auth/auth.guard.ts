import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router'

import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private route: Router
  ) { }

  canActivate(): boolean {
    if(!this.authService.isAuthenticated$.value) {
      this.route.navigate(['/login']);
      return false;
    } else {
      return true;
    }
  }
}
