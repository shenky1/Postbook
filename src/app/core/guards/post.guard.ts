import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root',
})
export class PostGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const id = route.paramMap.get('id');
    if (!this.dataService.getPostById(Number(id))) {
      this.router.navigate(['/page-not-found']);
      return false;
    }
    return true;
  }
}
