import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUserModel } from 'models/user';
import { UserService } from 'services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {
  user!: IUserModel;
  constructor(private location: Location, private userService: UserService) {}
  async ngOnInit() {
    await this.userService.getUser(1).subscribe((response) => {
      this.user = response;
    });
  }

  goBack = () => this.location.back();
}
