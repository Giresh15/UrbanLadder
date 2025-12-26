import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cart } from '../classes/cart';
import { ProductCategeory } from '../classes/product-categeory';
import { ProductDetails } from '../classes/product-details';
import { UserDetails } from '../classes/user-details';

@Injectable({
  providedIn: 'root'
})
export class UrbanServiceService {

items:ProductDetails[]=[];


  cartUrl: string="http://localhost:8080/urbanladder/cart"
  productUrl: string="http://localhost:8080/urbanladder/product_details"
  user_detailsUrl: string="http://localhost:8080/urbanladder/user_details"
  categeoryUrl: string="http://localhost:8080/urbanladder/product_categeory"

  constructor(private httpClient: HttpClient) { }

  getAllProductDetails() : Observable<ProductDetails[]>{
    return this.httpClient.get<GetProductDetailResponse>(this.productUrl).
    pipe(map(response=>response._embedded.product_detailses))
  }

  getCart() : Observable<Cart[]>{
    return this.httpClient.get<GetCartResponse>(this.cartUrl).
    pipe(map(Response=>Response._embedded.carts))
  }


  getAllProductCategeory() : Observable<ProductCategeory[]>
  {
   return this.httpClient.get<GetProductCategeoryResponse>(this.categeoryUrl).
   pipe(map(response=>response._embedded.product_categeories))
  }



  getProductsById(pId:number):Observable<ProductDetails>
   {
      const productUrl =this.productUrl+"/"+pId;
     return this.httpClient.get<ProductDetails>(this.productUrl);
   }
   
  updateProduct(pdetail:ProductDetails):Observable<ProductDetails>
   {
     const httpOptions=
     {
       headers:new HttpHeaders({
         'content-type':'application/json',
         'Authorization' :'auth-token',
         'Access-Control-Allow-origin':'*'
       })
     };
     return this.httpClient.put<ProductDetails>(this.productUrl+`/${pdetail.p_id}`,pdetail,httpOptions);
   }
  
   deleteProductDetails(pId:number):Observable<ProductDetails>
   {
     const httpOptions=
     {
       headers:new HttpHeaders({
         'content-type':'application/json',
         'Authorization' :'auth-token',
         'Access-Control-Allow-origin':'*'
       })
     };
     return this.httpClient.delete<ProductDetails>(this.productUrl+`/${pId}`,httpOptions);
   }

   saveProduct(pdetail:ProductDetails):Observable<ProductDetails>
   {
   const httpOptions=
   {
     headers:new HttpHeaders({
       'content-type':'application/json',
       'Authorization' :'auth-token',
       'Access-Control-Allow-origin':'*'
     })
   };
   return this.httpClient.post<ProductDetails>(this.productUrl,pdetail,httpOptions);
   }

   saveUser(user: UserDetails):Observable<UserDetails>
    {
    const httpOptions=
    {
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.post<UserDetails>(this.user_detailsUrl,user,httpOptions);
    }


    getProductsCategeoryByPcId(pcId:number):Observable<ProductCategeory[]>
    {
      const productByPcIdUrl= "http://localhost:8080/urbanladder/product_details/search/findBypcid?id=" + pcId;
      return this.httpClient.get<GetProductCategeoryResponse>(productByPcIdUrl).
      pipe(map(response=> response._embedded.product_categeories));
     }





   getProductsBySearchName(pname: string) : Observable<ProductDetails[]>
     {
      const searchUrl="http://localhost:8080/urbanladder/product_details/search/findBypname?pname="+pname;
        return this.httpClient.get<GetSearchByPname>(searchUrl).
        pipe(map(response=>response._embedded.product_detailses));
    }

    AddToCart(pdetail:ProductDetails){
this.items.push(pdetail);
//this.getTotalPrice();
    }
 /* getTotalPrice() :number{
    let grandtotal=0;
    this.items.map((items:any)=>{
grandtotal +=items.total;
    })
    return grandtotal
  }*/

    getItems() {
      return this.items;
    }

/*removeCartItem(items:ProductDetails){
  this.items.map((a:any,index:any)=>{
if(items.p_id==a.p_id)
this.items.splice(index,1);
  })

}*/

removeAllcart(){
  this.items=[]
}

  }


  
  interface GetProductDetailResponse{
    _embedded : {
      product_detailses : ProductDetails[]
    }
  }

  interface GetCartResponse{
    _embedded : {
      carts:Cart[]
  }
  }
  
  interface GetSearchByPname{
    _embedded:{
      product_detailses : ProductDetails[]
    }
  }
  
  interface GetProductCategeoryResponse{
    _embedded : {
      product_categeories : ProductCategeory[]
    }
  }

