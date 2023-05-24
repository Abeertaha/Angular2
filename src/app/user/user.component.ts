import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  users: any[] = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' }
  ];

  newUser: any = { name: '', email: '' };

  addUser() {
    this.users.push(this.newUser);
    this.newUser = { name: '', email: '' };
  }

  editUser(user: any) {
    // Implement the edit functionality here
  }

  deleteUser(user: any) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }
}
