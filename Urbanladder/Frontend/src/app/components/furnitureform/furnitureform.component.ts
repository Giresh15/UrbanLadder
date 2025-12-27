import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetails } from 'src/app/classes/product-details';
import { UrbanServiceService } from 'src/app/services/urban-service.service';

@Component({
  selector: 'app-furnitureform',
  templateUrl: './furnitureform.component.html',
  styleUrls: ['./furnitureform.component.css']
})
export class FurnitureformComponent implements OnInit {
  pdetail :ProductDetails = new ProductDetails (0,"Ram","developer is ",4000,35,"url",2);
 
  

  constructor(
    private urban:UrbanServiceService,
    private router:Router,
    private activatedRoute:ActivatedRoute ) { }
    editable : boolean=false;

  ngOnInit(): void {
//this.getProductsById();
this.activatedRoute.paramMap.subscribe( ()=> {this.getProductsById()});
//console.log(this.pdetail);
  }

  getProductsById() {
    const pId=+this.activatedRoute.snapshot.paramMap.get("id");
    if(pId>0)
    {
      this.editable=true;
      this.urban.getProductsById(pId).subscribe(data => {this.pdetail=data});
      //console.log(this.pdetail);
    }
  }

  onSubmit()
  {
    if(this.editable)
    {
      this.urban.updateProduct(this.pdetail).subscribe(data=>
        console.log(data));
        this.router.navigateByUrl("/products"); 
    }
    else{
    console.log(this.pdetail);
    this.urban.saveProduct(this.pdetail).subscribe(data=>
      console.log(data));
      this.router.navigateByUrl("/products");
    }
  }

}
