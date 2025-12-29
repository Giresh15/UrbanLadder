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
    this.router.navigateByUrl("/register");
  }
  show2()
  {
    this.router.navigateByUrl("/login");
  }
  buyNow(){
    window.alert("U Have To Login To Buy Product");
    this.router.navigateByUrl("/login");
  }
  
productSections = [
  {
    title: 'Recliners',
    items: [
      {
        name: 'Mika Leatherette Study Chair',
        price: 9999,
        image: 'assets/images/char.jpg',
        desc: [
          'Leatherette upholstery',
          'Adjustable height',
          '360° swivel wheels'
        ]
      },
      {
        name: 'Premium Recliner',
        price: 15999,
        image: 'assets/images/chair-2.jpg',
        desc: [
          'Soft cushioning',
          'High back support',
          'Durable metal frame'
        ]
      },
      {
        name: 'Lounge Chair',
        price: 23999,
        image: 'assets/images/lounge.jpg',
        desc: [
          'Relaxed seating',
          'Modern design',
          'Strong wooden base'
        ]
      },
      {
        name: 'Leather Recliner',
        price: 43999,
        image: 'assets/images/recliner.jpg',
        desc: [
          'Premium leather',
          'Reclining mechanism',
          'Extra comfort padding'
        ]
      }
    ]
  },
  {
    title: 'Dining Sets',
    items: [
      {
        name: '6 Seater Dining Set',
        price: 9999,
        image: 'assets/images/d-4.jpg',
        desc: [
          'Solid wood',
          'Compact design',
          'Easy maintenance'
        ]
      },
      {
        name: '4 Seater Dining Set',
        price: 15999,
        image: 'assets/images/DinerSet-3.jpg',
        desc: [
          'Modern finish',
          'Comfortable seating',
          'Durable structure'
        ]
      },
      {
        name: 'Dining Table',
        price: 23999,
        image: 'assets/images/DiningTable-2.jpg',
        desc: [
          'Spacious tabletop',
          'Strong legs',
          'Premium finish'
        ]
      },
      {
        name: 'Classic Dining Table',
        price: 43999,
        image: 'assets/images/dinning-1.jpg',
        desc: [
          'Elegant look',
          'High durability',
          'Long-lasting wood'
        ]
      }
    ]
  },
{
    title: 'Sofa Sets',
    items: [
      {
        name: '3 Seater Sofa',
        price: 101999,
        image: 'assets/images/sofa-4.jpg',
        desc: ['Soft cushions', 'Premium fabric', 'Strong frame']
      },
      {
        name: 'L-Shape Sofa',
        price: 125999,
        image: 'assets/images/sofa-3.jpg',
        desc: ['Modern design', 'Spacious seating', 'Durable build']
      },
      {
        name: '2 Seater Sofa',
        price: 83999,
        image: 'assets/images/sofa-2.jpg',
        desc: ['Compact size', 'Comfort seating', 'Stylish look']
      },
      {
        name: 'Classic Sofa',
        price: 33999,
        image: 'assets/images/sofa-1.jpg',
        desc: ['Elegant finish', 'Long lasting', 'Easy maintenance']
      }
    ]
  },
  {
    title: 'Computer Tables',
    items: [
      {
        name: 'Office Table',
        price: 18999,
        image: 'assets/images/comp-2.jpg',
        desc: ['Spacious top', 'Cable management', 'Strong legs']
      },
      {
        name: 'Computer Set',
        price: 10999,
        image: 'assets/images/comp-3.jpg',
        desc: ['Compact design', 'Modern look', 'Durable wood']
      },
      {
        name: 'Single Table',
        price: 8999,
        image: 'assets/images/a.jpg',
        desc: ['Minimal design', 'Lightweight', 'Easy move']
      },
      {
        name: 'Full Set Table',
        price: 8599,
        image: 'assets/images/comp-1.jpg',
        desc: ['Complete setup', 'Strong build', 'Value for money']
      }
    ]
  }
];


   
}
