import { Component } from '@angular/core';
import { CatalogServiceService } from '../catalog-service.service';

@Component({
  selector: 'app-ex89',
  standalone: false,
  templateUrl: './ex89.component.html',
  styleUrl: './ex89.component.css'
})
export class Ex89Component {
  categories: any;
  constructor(private cs: CatalogServiceService) {
    this.categories = this.cs.getCategories();
  }
}
