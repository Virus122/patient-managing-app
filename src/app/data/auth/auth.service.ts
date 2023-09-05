import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { User, UserLogin } from '../interfaces/user.interface';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = environment.apiUrl.login;
  private userSubject?: BehaviorSubject<User | null>;
  public user: Observable<User | null>;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { 
    this.userSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('user')!))
    this.user = this.userSubject.asObservable();
  }

  public get userValue() {
    return this.userSubject?.value;
}

  public login(userLoginObject: UserLogin): Observable<User> {
    return this.httpClient.post<User>(this.loginUrl, userLoginObject)
      .pipe(map((user: User)=> {
        localStorage.setItem('user', JSON.stringify(user))
        this.userSubject?.next(user)
        return user;
      }))
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject?.next(null);
    this.router.navigate(['/login']);
}

  public isAuthenticated(): boolean {
    return !!this.userSubject?.value;
  }
}
