import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrbanServiceService } from 'src/app/services/urban-service.service';

@Component({
  selector: 'app-paymentform',
  templateUrl: './paymentform.component.html',
  styleUrls: ['./paymentform.component.css']
})
export class PaymentformComponent implements OnInit {

  totalAmount = 0;

  paymentType = 'CARD';

  // billing
  fullName = '';
  email = '';

  // card
  cardName = '';
  cardNumber: number | null = null;
  expiryMonth = '';
  expiryYear: number | null = null;
  cvv = '';

  // upi
  upiId = '';

  paymentStatus: 'SUCCESS' | 'FAILED' | '' = '';

  constructor(
    private urban: UrbanServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.totalAmount = this.urban.getTotalPrice();
  }

  payNow() {

    // COD → always success
    if (this.paymentType === 'COD') {
      this.paymentStatus = 'SUCCESS';
      this.router.navigateByUrl('/successful');
      return;
    }

    // CARD
    if (this.paymentType === 'CARD') {
      if (this.cardNumber && this.cvv && this.expiryMonth && this.expiryYear) {
        this.paymentStatus = 'SUCCESS';
        this.router.navigateByUrl('/successful');
      } else {
        this.paymentStatus = 'FAILED';
      }
      return;
    }

    // UPI
    if (this.paymentType === 'UPI') {
      if (this.upiId && this.upiId.includes('@')) {
        this.paymentStatus = 'SUCCESS';
        this.router.navigateByUrl('/successful');
      } else {
        this.paymentStatus = 'FAILED';
      }
    }
  }
}
