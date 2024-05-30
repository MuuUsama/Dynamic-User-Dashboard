import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Users } from 'src/app/domain/users/models/users';
import { UsersRepository } from 'src/app/domain/users/users.repository';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  userId!: number;
  page: number = 0;
  users!: Users;
  first_name!: string;
  last_name!: string;
  email!: string;
  submitted: boolean = false;
  constructor(
    private userRepository: UsersRepository,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.userId = +params['id'];
      this.getUserById();
    });
  }
  getUserById(): void {
    this.submitted = true
    this.userRepository.getUserById(this.userId).subscribe(res => {
      this.users = res.data;
      this.submitted = false
    })
  }
  navigate(): void {
    this.router.navigate([`/`]);
  }
}
