import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/classes/user-details';
import { UrbanServiceService } from 'src/app/services/urban-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:UserDetails = new UserDetails  (0,"first","RG","RG@gmail.com",7036144204,"name","RG","user");
  constructor(private router:Router,private urban: UrbanServiceService) { }

  ngOnInit(): void {
  }

  onRegist():void{
    console.log(this.user);
  this.urban.saveUser(this.user).subscribe(data=>
    console.log(data));
    this.router.navigateByUrl("");
  }
}
