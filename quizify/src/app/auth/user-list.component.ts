import { Component, OnInit, inject } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  standalone: true, 
  imports: [], 
  template: `
    <ul>
      <!-- Boucle sur les utilisateurs et les affiche -->
      <li *ngFor="let user of users()">
        {{ user.name }}
      </li>
    </ul>
  `,
})
export class UserListComponent implements OnInit {
  private userService = inject(UserService); 
  users = this.userService.users;  

  ngOnInit() {
    this.userService.getUsers().subscribe();
  }
}
