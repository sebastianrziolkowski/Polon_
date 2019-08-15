import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({providedIn: 'root'})

export class UserService {
  private readonly baseUrl = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  public getUser = (id: string): Observable<User> => this.http.get<User>(`${this.baseUrl}/${id}`);

  public getUserList = (): (Observable<User[]>) => this.http.get<User[]>(this.baseUrl);

  public createUser = (user: User): Observable<User> => this.http.post<User>(this.baseUrl, user);
}
