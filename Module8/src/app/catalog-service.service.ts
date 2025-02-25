import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogServiceService {
  datas=[
    {"Cateid":"cate1","CateName":"nuoc ngot",
    "Products":[
    {"ProductId":"p1","ProductName":"Coca","Price":100,
    "Image":"assets/images/coca.png"},
    {"ProductId":"p2","ProductName":"Pepsi","Price":300,
    "Image":"assets/images/pepsi.png"},
    {"ProductId":"p3","ProductName":"Sting","Price":200,
    "Image":"assets/images/sting.png"},
    ]
    },
    {"Cateid":"cate2","CateName":"Bia",
    "Products":[
    {"ProductId":"p4","ProductName":"Heleiken","Price":500,
    "Image":"assets/images/sting.png"},
    {"ProductId":"p5","ProductName":"333","Price":400,
    "Image":"assets/images/sting.png"},
    {"ProductId":"p6","ProductName":"Sai Gon","Price":600,
    "Image":"assets/images/sting.png"},
    ]
    },
    ]
    constructor() { }
    getCategories()
    {
    return this.datas 
    }
}
