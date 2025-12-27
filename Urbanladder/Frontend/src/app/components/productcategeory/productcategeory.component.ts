import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCategory } from 'src/app/classes/product-category';
import { UrbanServiceService } from 'src/app/services/urban-service.service';

@Component({
  selector: 'app-productcategeory',
  templateUrl: './productcategeory.component.html',
  styleUrls: ['./productcategeory.component.css']
})
export class ProductcategeoryComponent implements OnInit {

  category : ProductCategory[];

  constructor(private urban:UrbanServiceService,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getAllProductCategory()});
  }


  getAllProductCategory() {
    this.urban.getAllProductCategeory().subscribe(data=>{      
       this.category=data
     });
   }
}
