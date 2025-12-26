import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrls: ['./paymentform.component.css']
})
export class PaymentformComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  payNow(){
    
    this.router.navigateByUrl("/successful");
    window.alert("Your Payment is completed sucessfully.");
    }
  }

