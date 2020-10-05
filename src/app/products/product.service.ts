import { product } from './../models/product.model';
import { Injectable } from "@angular/core";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()

export class ProductService {

  constructor(private httpClient: HttpClient) { }

  private listProducts: product[] = [
    {
      Id: 1,
      Name: 'Donut',
      Description: 'Made of belgium chocolate with very tasty donut',
      Price: 90.5,
      ImageFileName: 'assets/images/Donut2.jpg'
    },
    {
      Id: 2,
      Name: 'Chocolate Cup Cake',
      Description: 'A delicious cup cake with hot cholocate and choco chips',
      Price: 60,
      ImageFileName: 'assets/images/Choco_CupCake.jpg'
    }
  ];

  getProducts(): Observable<product[]> {
    //return of(this.listProducts);
    return this.httpClient.get<product[]>("http://localhost:62596/api/Bakery/GetAll");
  }

  save(prd: product) : Observable<product> {
    if (prd.Id === null) {
     return this.httpClient.post<product>("http://localhost:62596/api/Bakery/AddNew",prd, {
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      });
    }
  }
}
