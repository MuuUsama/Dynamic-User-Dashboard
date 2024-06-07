import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Users } from 'src/app/domain/users/models/users';
import { UsersRepository } from 'src/app/domain/users/users.repository';
import { Router } from '@angular/router';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: Users[] = [];
  page: number = 0;
  perPage: number = 6;
  totalRows: number = 0;
  submitted: boolean = false;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private userRepository: UsersRepository,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getUsersData({ pageIndex: this.page, pageSize: this.perPage });
  }

  getUsersData(event: { pageIndex: number, pageSize: number }): void {
    this.submitted = true;
    const page = event.pageIndex + 1;
    this.userRepository.getUsersData(page).subscribe(res => {
      this.users = res.data || [];
      this.totalRows = res.pagination?.total || 0;
      this.submitted = false;
    }, error => {
      console.error('Error fetching users data:', error);
      this.submitted = false;
    });
  }

  pageChanged(event: PageEvent) {
    this.page = event.pageIndex;
    this.perPage = event.pageSize;
    this.getUsersData({ pageIndex: this.page, pageSize: this.perPage });
  }

  onSearch(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const id = inputElement.value;

    if (id) {
      this.userRepository.getUsersData(+id).subscribe(
        data => {
          if (data.data) {
            this.router.navigate(['/user', id]);
          } else {
            alert('User not found');
          }
        },
        error => {
          alert('User not found');
        }
      );
    }
  }

  navigate(id: number): void {
    this.router.navigate([`user`, id]);
  }
}
