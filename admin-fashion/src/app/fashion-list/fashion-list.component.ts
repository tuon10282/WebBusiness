import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Fashion } from '../../classes/Fashion';
import { FashionAPIService } from '../fashion-api.service';

@Component({
  selector: 'app-fashion-list',
  templateUrl: './fashion-list.component.html',
  styleUrls: ['./fashion-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class FashionListComponent implements OnInit {
  fashions: Fashion[] = [];
  selectedStyle: string = '';
  styles: string[] = [];

  constructor(
    private fashionService: FashionAPIService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadFashions();
  }

  loadFashions(): void {
    this.fashionService.getFashions().subscribe({
      next: (data) => {
        this.fashions = data;
        this.styles = [...new Set(this.fashions.map(item => item.style))];
      },
      error: (err) => {
        console.error('Error loading fashions:', err);
        alert('Failed to load fashion items. Please try again.');
      }
    });
  }

  filterByStyle(): void {
    if (this.selectedStyle) {
      this.fashionService.getFashionsByStyle(this.selectedStyle).subscribe({
        next: (data) => {
          this.fashions = data;
        },
        error: (err) => {
          console.error('Error filtering fashions:', err);
          alert('Failed to filter fashion items. Please try again.');
        }
      });
    } else {
      this.loadFashions();
    }
  }

  viewDetails(id: string): void {
    this.router.navigate(['/fashion-detail', id]);
  }

  editFashion(id: string): void {
    this.router.navigate(['/fashion-edit', id]);
  }

  deleteFashion(id: string): void {
    if (confirm('Are you sure you want to delete this fashion item?')) {
      this.fashionService.deleteFashion(id).subscribe({
        next: () => {
          alert('Fashion item deleted successfully');
          this.loadFashions();
        },
        error: (err) => {
          console.error('Error deleting fashion:', err);
          alert('Failed to delete fashion item. Please try again.');
        }
      });
    }
  }

  addNewFashion(): void {
    this.router.navigate(['/fashion-add']);
  }
}
