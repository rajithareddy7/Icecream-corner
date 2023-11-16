import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Implement your authentication logic here
    if (this.username === 'admin' && this.password === 'password') {
      console.log('Login successful');
      // Redirect to another page or perform other actions
    } else {
      console.log('Login failed');
      // Handle unsuccessful login
    }
  }
}


