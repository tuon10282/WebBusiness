import { Component } from '@angular/core';
import { ProductHttpService } from '../product-http.service';

@Component({
  selector: 'app-ex91-service-product-http-handle-error',
  standalone: false,
  templateUrl: './ex91-service-product-http-handle-error.component.html',
  styleUrls: ['./ex91-service-product-http-handle-error.component.css'],
})
export class Ex91ServiceProductHttpHandleErrorComponent {
  products: any;
  errMessage: string = '';

  constructor(private _service: ProductHttpService) {
    this._service.getProductsHandleError().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        this.errMessage = err.message;
      },
    });
  }
}
