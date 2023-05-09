import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import { Users } from '../services/users.service';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
     
    constructor(private userService: Users, public router: Router){}
    ngOnInit(){}
    canActivate(): boolean{
        if (!this.userService.isLogged) {
            this.router.navigate(['/login']);
            return false
        }
        return true    
    }
}