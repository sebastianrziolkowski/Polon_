import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { User } from './user';

@Injectable({providedIn: 'root'})

export class UserService {

  constructor(private readonly router: Router, private readonly http: HttpClient) {}

  data;

  send (credentials: object) { this.http.post('http://localhost:8080/logincheck', credentials); };
  response () { return this.http.get('http://localhost:8080/loginpermision'); };

  signIn(id: number, password: string): boolean {
    this.send({id: id, password: password});
    this.response().subscribe(data => this.data = data);
    sessionStorage.setItem('signedIn', 'true');
    this.router.navigate(['home']);

    if (this.data.id) return true;
    else return false;
  };
  isSignedIn() { return sessionStorage.getItem('signedIn') !== null; };
  signOut() {
    sessionStorage.removeItem('signedIn');
    this.router.navigate(['/']);
  };

  private readonly baseUrl = 'http://localhost:8080/users';

  public getUser = (id: string): Observable<User> => this.http.get<User>(`${this.baseUrl}/${id}`);
  public getUserList = (): (Observable<User[]>) => this.http.get<User[]>(this.baseUrl);
  public createUser = (user: User): Observable<User> => this.http.post<User>(this.baseUrl, user);
}
