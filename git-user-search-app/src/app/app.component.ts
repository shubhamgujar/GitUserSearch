import { Component } from '@angular/core';

import { UserServiceService} from './services/user-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userSearchKeyword: string;
  users;
  totalResult: number = 0;

  constructor(private userService: UserServiceService) {

  }

public searchUser(){
  this.userService.getUser(this.userSearchKeyword).subscribe((user) => {
    console.log(user);
    this.users = user.items;
    this.totalResult = user.total_count;
  }
    );
}
}
