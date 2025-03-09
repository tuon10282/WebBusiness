import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Add this import
import { Fashion } from '../../classes/Fashion';
import { FashionAPIService } from '../fashion-api.service';

interface StyleGroup {
  name: string;
  fashions: Fashion[];
}

@Component({
  selector: 'app-fashion-list',
  standalone: false,
  templateUrl: './fashion-list.component.html',
  styleUrl: './fashion-list.component.css'
})
export class FashionListComponent implements OnInit {
  fashions: Fashion[] = [];
  fashionByStyles: StyleGroup[] = [];
  searchQuery: string = '';
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private fashionService: FashionAPIService,
    private router: Router // Add Router injection here
  ) { }

  ngOnInit(): void {
    this.loadFashions();
  }

  loadFashions(): void {
    this.isLoading = true;
    this.fashionService.getFashions().subscribe({
      next: (data) => {
        this.fashions = data;
        this.groupFashionsByStyle();
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error fetching fashions:', error);
        this.errorMessage = 'Failed to load fashion items. Please try again later.';
        this.isLoading = false;
      }
    });
  }

  groupFashionsByStyle(): void {
    // Group fashions by style
    const styleMap = new Map<string, Fashion[]>();
    
    this.fashions.forEach(fashion => {
      if (!styleMap.has(fashion.style)) {
        styleMap.set(fashion.style, []);
      }
      styleMap.get(fashion.style)?.push(fashion);
    });
    
    // Convert map to array of style groups
    this.fashionByStyles = Array.from(styleMap.entries()).map(([name, fashions]) => ({
      name,
      fashions
    }));
  }

  search(): void {
    if (!this.searchQuery.trim()) {
      this.loadFashions();
      return;
    }

    this.isLoading = true;
    this.fashionService.getFashionsByStyle(this.searchQuery).subscribe({
      next: (fashions) => {
        this.fashionByStyles = [{
          name: this.searchQuery,
          fashions: fashions
        }];
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'No fashion items found matching your search.';
        this.isLoading = false;
        console.error('Error searching fashions:', error);
      }
    });
  }

  viewDetails(id: string): void {
    this.router.navigate(['/fashion-detail', id]); 
}
}