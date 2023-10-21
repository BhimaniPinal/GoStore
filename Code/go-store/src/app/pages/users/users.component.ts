import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user.service';
import { IUserModel } from 'models/user';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { Routing } from 'shared/constants/routing';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  // standalone: true,
  // imports: [MatTableModule, MatButtonModule, RouterModule],
})
export class UsersComponent implements OnInit {
  users: Array<IUserModel> = [];
  todaydate: Date = new Date();
  columns: string[] = [
    'id',
    'username',
    'fistname',
    'lastname',
    'email',
    'phone',
    'action',
  ];

  constructor(private userSerice: UserService, private router: Router) {}
  ngOnInit(): void {
    this.userSerice.getUsers().subscribe((response) => {
      this.users = response;
    });

    this.userSerice.getPhotoes$.subscribe((response) => {
      console.log(response);
    });
  }

  handleAddClick = () => {
    this.router.navigate([`/${Routing.Users}/add`]);
  };

  handleEditClick = (userId: number) => {
    this.router.navigate([`/${Routing.Users}/${userId}`]);
  };
}
