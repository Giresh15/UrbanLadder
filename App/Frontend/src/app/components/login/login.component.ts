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
  user:UserDetails = new UserDetails  (0,"first","RG","RG@gmail.com",7036144204,"name","RG","user");
  constructor(private router:Router,private urban: UrbanServiceService) { }

  ngOnInit(): void {
  }

  onLogin():void
  {
      if( this.user.usertype=="admin"&&this.user.password=="giresh@123"&& this.user.email=="giresh@gmail.com")
      {
      this.router.navigateByUrl("/products");//crud operations
      console.log("admin verified");
      window.alert("login successfull");
      }
      else if(this.user.usertype=="user" )
      {
      this.router.navigateByUrl("/carts");//display code
      console.log("user verified");
      window.alert("login successfull");
      }
      else
      {
      this.router.navigateByUrl("/login");
      window.alert("login Failed....Try Again!");
      }
    }
}
