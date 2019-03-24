import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {
  constructor(private authService: AuthenticationService) {}

  canActivate(): boolean {
    return this.authService.isAuthenticated();
  }

}
// i got an error here with AuthGuard and CanActivate that turn out to be wrong import place.
