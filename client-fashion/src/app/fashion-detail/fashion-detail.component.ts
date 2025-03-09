// src/app/components/fashion-detail/fashion-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Fashion } from '../../classes/Fashion';
import { FashionAPIService } from '../fashion-api.service';

@Component({
  selector: 'app-fashion-detail',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './fashion-detail.component.html',
  styleUrls: ['./fashion-detail.component.css']
})
export class FashionDetailComponent implements OnInit {
  fashion: Fashion | null = null;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fashionService: FashionAPIService
  ) { }

  ngOnInit(): void {
    this.loadFashionDetails();
  }

  loadFashionDetails(): void {
    this.isLoading = true;
    const id = this.route.snapshot.paramMap.get('id');
    
    if (id) {
      this.fashionService.getFashionById(id).subscribe({
        next: (data) => {
          this.fashion = data;
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error fetching fashion details:', error);
          this.errorMessage = 'Failed to load fashion details. Please try again.';
          this.isLoading = false;
        }
      });
    } else {
      this.errorMessage = 'Invalid fashion ID';
      this.isLoading = false;
    }
  }

  goBack(): void {
    this.router.navigate(['/fashions']);
  }
}