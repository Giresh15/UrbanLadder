import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cart } from '../classes/cart';
import { ProductCategory } from '../classes/product-category';
import { ProductDetails } from '../classes/product-details';
import { UserDetails } from '../classes/user-details';
import { RegisterUser } from '../classes/register-user';

@Injectable({
  providedIn: 'root'
})
export class UrbanServiceService {

items:ProductDetails[]=[];


  cartUrl: string="/cart"
  productUrl: string="/product_details"
  user_detailsUrl: string="/user_details"
  categeoryUrl: string="/product_category"

  constructor(private httpClient: HttpClient) { }

  getAllProductDetails() : Observable<ProductDetails[]>{
    return this.httpClient.get<GetProductDetailResponse>(this.productUrl).
    pipe(map(response=>response._embedded.product_detailses))
  }

  getCart() : Observable<Cart[]>{
    return this.httpClient.get<GetCartResponse>(this.cartUrl).
    pipe(map(Response=>Response._embedded.carts))
  }

login(user: UserDetails) {
  return this.httpClient.post(
    '/urbanladder/login',
    user,
    {
      responseType: 'text'
    }
  );
}


  getAllProductCategeory() : Observable<ProductCategory[]>
  {
   return this.httpClient.get<GetProductCategeoryResponse>(this.categeoryUrl).
   pipe(map(response=>response._embedded.product_categeories))
  }



  getProductsById(pId:number):Observable<ProductDetails>
   {
      const productUrl =this.productUrl+"/"+pId;
     return this.httpClient.get<ProductDetails>(productUrl);
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

   saveUser(user: RegisterUser):Observable<RegisterUser>
    {
    const httpOptions=
    {
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization' :'auth-token',
        'Access-Control-Allow-origin':'*'
      })
    };
    return this.httpClient.post<RegisterUser>(this.user_detailsUrl,user,httpOptions);
    }


    getProductsCategeoryByPcId(pcId:number):Observable<ProductDetails[]> {
  const url = `/product_details/search/findByPcId?pcId=${pcId}`;
  return this.httpClient
    .get<GetProductDetailResponse>(url)
    .pipe(map(response => response._embedded.product_detailses));
}





   getProductsBySearchName(pname: string) : Observable<ProductDetails[]>
     {
      const searchUrl="/product_details/search/findByPnameContainingIgnoreCase?pname=" + pname;
        return this.httpClient.get<GetSearchByPname>(searchUrl).
        pipe(map(response=>response._embedded.product_detailses));
    }

    AddToCart(pdetail: ProductDetails) {
  this.items.push(pdetail);
}

getItems() {
  return this.items;
}

getTotalPrice(): number {
  let total = 0;
  this.items.forEach(item => {
    total += item.price;
  });
  return total;
}


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
      product_categeories : ProductCategory[]
    }
  }

