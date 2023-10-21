import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserModel } from 'models/user';
import { UserService } from 'services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {
  user!: IUserModel;
  id!: number;
  constructor(
    private location: Location,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}
  async ngOnInit() {
    await this.getUser();
  }
  async getUser() {
    await this.activatedRoute.params.subscribe((params) => {
      if (params) {
        this.id = +(params as IParams).id;
        this.userService.getUser(this.id).subscribe((response) => {
          this.user = response;
        });
      }
    });
  }

  goBack = () => this.location.back();
}

interface IParams {
  id: string;
}
