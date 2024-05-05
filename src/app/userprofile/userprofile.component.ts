import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss'],
})
export class UserprofileComponent implements OnInit {
  currentUser: any;

  constructor(
    public authService: AuthService,
    public userService: UserService
  ) {}

  logout(): void {
    this.authService.logout();
  }

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe((user) => {
      this.currentUser = user;
    });
  }
}
