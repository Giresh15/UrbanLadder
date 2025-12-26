import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetails } from 'src/app/classes/user-details';
import { UrbanServiceService } from 'src/app/services/urban-service.service';

@Component({
  selector: 'app-shopnow',
  templateUrl: './shopnow.component.html',
  styleUrls: ['./shopnow.component.css']
})
export class ShopnowComponent implements OnInit {
  
  constructor(public router : Router) { }

  ngOnInit(): void {
  }
  show1()
  {
    this.router.navigateByUrl("register");
  }
  show2()
  {
    this.router.navigateByUrl("login");
  }
  buyNow(){
    window.alert("U Have To Login To Buy Product");
    this.router.navigateByUrl("login");
  }
  


   
}
