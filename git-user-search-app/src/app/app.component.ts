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

  constructor(private userService: UserServiceService) {

  }

public searchUser(){
  console.log('button clicked');
  this.userSearchKeyword = document.getElementById('userSearchString').value;
  this.userService.getUser(this.userSearchKeyword).subscribe((user) => {
    this.users = user.items}
    );
}
}
