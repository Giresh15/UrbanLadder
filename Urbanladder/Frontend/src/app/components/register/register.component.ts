import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/classes/register-user';
import { UrbanServiceService } from 'src/app/services/urban-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: RegisterUser = new RegisterUser(
  '', '', '', 0, '', '', 'user'
);
  constructor(private router:Router,private urban: UrbanServiceService) { }

  ngOnInit(): void {
  }

  onRegist():void{
    console.log(this.user);
  this.urban.saveUser(this.user).subscribe(data=>
    console.log(data));
    this.router.navigateByUrl("/login");
  }
}
