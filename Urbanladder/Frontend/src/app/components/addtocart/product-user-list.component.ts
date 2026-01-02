import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetails } from 'src/app/classes/product-details';
import { UrbanServiceService } from 'src/app/services/urban-service.service';

@Component({
  selector: 'app-product-user-list',
  templateUrl: './product-user-list.component.html',
  styleUrls: ['./product-user-list.component.css']
})
export class ProductUserListComponent implements OnInit {

  productdetails!: ProductDetails[];

  items: any[] = [];
  totalAmount = 0;

  searchName!: string;

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    public urban: UrbanServiceService
  ) {}

  ngOnInit(): void {

    // product list
    this.activeRoute.paramMap.subscribe(() => {
      this.getAllProductDetails();
    });

    // cart items
    this.items = this.urban.getItems();

    // default select all
    this.items.forEach(item => item.selected = true);

    this.calculateTotal();
  }

  calculateTotal() {
    this.totalAmount = 0;

    this.items.forEach(item => {
      if (item.selected) {
        this.totalAmount += item.product.price * item.quantity;
      }
    });
  }

  buyNow() {
    this.router.navigateByUrl('/paymentform');
  }

  shopMore() {
    this.router.navigateByUrl('/carts');
  }

  getAllProductDetails() {
    this.urban.getAllProductDetails().subscribe(data => {
      this.productdetails = data;
    });
  }
}
