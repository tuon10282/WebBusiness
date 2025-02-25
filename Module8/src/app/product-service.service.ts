import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productsImage=[
    {"ProductId":"p1","ProductName":"Coca","Price":100,"Image":"assets/images/coca.png"},
    {"ProductId":"p2","ProductName":"Pepsi","Price":300,"Image":"assets/images/pepsi.png"},
    {"ProductId":"p3","ProductName":"Sting","Price":200,"Image":"assets/images/sting.png"}
  ]
    constructor() { }
    getProductsWithImages()
    {
    return this.productsImage
    }
    getProductDetail(id:any){
    return this.productsImage.find(x=>x.ProductId==id)
    }
}
