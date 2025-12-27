import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/classes/user-details';
import { UrbanServiceService } from 'src/app/services/urban-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:UserDetails = new UserDetails  (0,
  '',
  '',
  '',
  0,
  '',
  '',
  'user');
  constructor(private router:Router,private urban: UrbanServiceService) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    console.log(this.user);
  this.user.usertype = this.user.usertype.toLowerCase();
   this.urban.login(this.user).subscribe(
    (dbUser) => {
      if (dbUser.usertype === 'admin') {
        this.router.navigateByUrl('/products');
      } else {
        this.router.navigateByUrl('/carts');
      }
      window.alert('login successful');
    },
    () => {
      window.alert('login Failed....Try Again!');
      this.router.navigateByUrl('/login');
    }
  );
}
}
