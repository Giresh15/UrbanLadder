import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cart } from 'src/app/classes/cart';
import { ProductCategory } from 'src/app/classes/product-category';
import { ProductDetails } from 'src/app/classes/product-details';
import { UrbanServiceService } from 'src/app/services/urban-service.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cart: Cart[];
  productdetails:ProductDetails[];
  category : ProductCategory[];

  searchName:string;
  currentPcId: number;


  constructor(private urban:UrbanServiceService,
    private router:Router,
    private activeRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(()=>{
      this.getAllProductDetails()});
      this.getAllProductCategory();

  }

 
  AddToCart(pdetail:ProductDetails){
    this.router.navigateByUrl("/addtocart");
    this.urban.AddToCart(pdetail);
    window.alert('Your product has been added to the cart!');
  }
  

  getAllProductCategory() {
    this.urban.getAllProductCategeory().subscribe(data=>{      
       this.category=data
     });
   }




  getAllProductDetails(){
    const hasPcId:boolean = this.activeRoute.snapshot.paramMap.has("pcId");
    const hassearchName:boolean = this.activeRoute.snapshot.paramMap.has("pname");
    if(hasPcId){
      
      this.currentPcId = +this.activeRoute.snapshot.paramMap.get("pcId");
      this.urban.getProductsCategeoryByPcId(this.currentPcId).subscribe(data => {
        console.log(data);
        this.productdetails = data;
      });
  
    }
    else if(hassearchName)
       {
     
         this.searchName=this.activeRoute.snapshot.paramMap.get("pname");
         console.log(this.searchName);
         this.urban.getProductsBySearchName(this.searchName).subscribe(data=>{
             console.log(data);
           this.productdetails=data;
         });
       
       }
else{
  this.urban.getAllProductDetails().subscribe(data => {
    console.log(data);
    this.productdetails = data;
  })
  }

}

  show3()
{
  this.router.navigateByUrl("/login");
}
  }




