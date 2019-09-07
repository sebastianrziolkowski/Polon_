import { Component, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { User } from '../user/user';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})

export class UsersListComponent implements OnInit {

  public users: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {this.userService.getUserList().subscribe(data => this.users = data);}
}
