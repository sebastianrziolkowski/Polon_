import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { UserService } from '../user/user.service';

@Injectable({providedIn: 'root'})

export class AuthGaurdService implements CanActivate {
  constructor(private readonly router: Router, private readonly userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.userService.isSignedIn()) return true;

    this.router.navigate(['/']);
    return false;
  }
}
