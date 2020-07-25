import { Component } from '@angular/core';

import { UserServiceService} from './services/user-service.service'
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userSearchKeyword: string;
  users;
  pageOfItems: Array<any>;
  totalResult: number = 0;
  details;
  count: 0;

  constructor(private userService: UserServiceService) {
      this.users = [];
  }

public searchUser(){
  this.userService.getUser(this.userSearchKeyword).subscribe((user: any) => {
    this.users = user.items;
    this.totalResult = user.total_count;
  }
    );
}

public getDetailsForUser(user){
  this.userService.getuserDetail(user.login).subscribe ((details) => {
    user.details = details;
    user.toggle = true;
  });
}

public toggleButton(user)
{
  if(user.toggle === true)
  {
    user.toggle = false;
  }
  else{
    user.toggle = true;
  }
}

onChangePage(pageOfItems: Array<any>) {
  // update current page of items
  this.pageOfItems = pageOfItems;
}
}
