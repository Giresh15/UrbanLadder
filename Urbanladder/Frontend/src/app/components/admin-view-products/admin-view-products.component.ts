import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrbanServiceService } from 'src/app/services/urban-service.service';
import { ProductDetails } from 'src/app/classes/product-details';

@Component({
  selector: 'app-admin-view-products',
  templateUrl: './admin-view-products.component.html',
  styleUrls: ['./admin-view-products.component.css']
})
export class AdminViewProductsComponent implements OnInit {

  productdetails: ProductDetails[] = [];

  constructor(
    private urban: UrbanServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.urban.getAllProductDetails().subscribe(data => {
      this.productdetails = data;
    });
  }

  backToAdmin() {
    this.router.navigateByUrl('/products');
  }
}
