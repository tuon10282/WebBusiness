import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Fashion } from '../../classes/Fashion';
import { FashionAPIService } from '../fashion-api.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-fashion-detail',
  templateUrl: './fashion-detail.component.html',
  styleUrls: ['./fashion-detail.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class FashionDetailComponent implements OnInit {
  fashion!: Fashion;
  safeDetail!: SafeHtml;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fashionService: FashionAPIService,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.fashionService.getFashion(id).subscribe({
      next: (data) => {
        this.fashion = data;
        // Sanitize the HTML content to safely display it
        this.safeDetail = this.sanitizer.bypassSecurityTrustHtml(this.fashion.details);
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading fashion details:', err);
        this.error = true;
        this.loading = false;
      }
    });
  }

  goToList(): void {
    this.router.navigate(['/fashions']);
  }

  editFashion(): void {
    this.router.navigate(['/fashion-edit', this.fashion._id]);
  }
}