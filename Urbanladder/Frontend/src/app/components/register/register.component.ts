import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/classes/register-user';
import { UserDetails } from 'src/app/classes/user-details';
import { UrbanServiceService } from 'src/app/services/urban-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: UserDetails = new UserDetails(
  0,'', '', '', 0, '', '', 'user'
);
  constructor(private router:Router,private urban: UrbanServiceService) { }

  ngOnInit(): void {
  }

  onRegist(): void {
  console.log(this.user);

  this.urban.saveUser(this.user).subscribe(
    () => {
      alert('Registration successful');
      this.router.navigateByUrl('/login');
    },
    error => {
      console.error(error);
      alert('Registration failed');
    }
  );
}
}
