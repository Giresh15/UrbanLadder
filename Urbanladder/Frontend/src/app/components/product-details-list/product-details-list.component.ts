import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetails } from 'src/app/classes/product-details';
import { UrbanServiceService } from 'src/app/services/urban-service.service';

@Component({
  selector: 'app-product-details-list',
  templateUrl: './product-details-list.component.html',
  styleUrls: ['./product-details-list.component.css']
})
export class ProductDetailsListComponent implements OnInit {

  productdetails:ProductDetails[];
  searchName:string;

  constructor(private urban:UrbanServiceService,
    private route:Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getAllProductDetails() });
  }

  addFurnitureForm(){
    this.route.navigateByUrl("/furnitureform")
  }

  updateProduct(pId :number)
    {
     this.route.navigateByUrl("/editdetails/"+pId);
    }
    deleteProduct(pId:number)
    {
     if(confirm("Do you want to delete"))
     {
       this.urban.deleteProductDetails(pId).subscribe(data=>{
         console.log("deleted")
      //reload the list
      this.getAllProductDetails();
      })
     }
    }


  getAllProductDetails() {
    
    this.urban.getAllProductDetails().subscribe(data => {
      console.log(data);
  
      this.productdetails = data;
    })
 
}

show3()
{
  this.route.navigateByUrl("/login");
}
  }

