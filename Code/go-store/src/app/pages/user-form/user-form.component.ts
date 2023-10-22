import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUserModel } from 'models/user';
import { UserService } from 'services/user.service';
import { Location } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent implements OnInit {
  user!: IUserModel;
  id!: number;

  id$: Observable<number> = this.activatedRoute.params.pipe(
    map((params) => params['id'])
  );
  constructor(
    private location: Location,
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}
  async ngOnInit() {
    await this.getUser();
  }
  async getUser() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.userService.getUser(this.id).subscribe((response) => {
      this.user = response;
    });
    // await this.activatedRoute.params.subscribe((params) => {
    //   if (params) {
    //     this.id = +(params as IParams).id;
    //     this.userService.getUser(this.id).subscribe((response) => {
    //       this.user = response;
    //     });
    //   }
    // });
  }

  goBack = () => this.location.back();
}

interface IParams {
  id: string;
}
