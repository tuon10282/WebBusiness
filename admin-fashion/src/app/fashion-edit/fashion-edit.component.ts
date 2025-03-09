import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Editor, Toolbar, NgxEditorModule } from 'ngx-editor';
import { FashionAPIService } from '../fashion-api.service';

@Component({
  selector: 'app-fashion-edit',
  templateUrl: './fashion-edit.component.html',
  styleUrls: ['./fashion-edit.component.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, NgxEditorModule]
})
export class FashionEditComponent implements OnInit, OnDestroy {
  fashionForm!: FormGroup;
  editor!: Editor;
  isAddMode: boolean = false;
  fashionId: string = '';
  submitted = false;

  // Editor toolbar configuration
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private fashionService: FashionAPIService
  ) {
    this.isAddMode = !this.route.snapshot.params['id'];
    this.fashionId = this.route.snapshot.params['id'] || '';
  }

  ngOnInit(): void {
    this.editor = new Editor();

    this.fashionForm = this.formBuilder.group({
      _id: [''],
      title: ['', [Validators.required]],
      details: ['', [Validators.required]],
      thumbnail: ['', [Validators.required]],
      style: ['', [Validators.required]],
      created_at: ['']
    });

    if (!this.isAddMode && this.fashionId) {
      this.fashionService.getFashion(this.fashionId).subscribe({
        next: (fashion) => {
          this.fashionForm.patchValue(fashion);
        },
        error: (err) => {
          console.error('Error loading fashion:', err);
          alert('Failed to load fashion details. Please try again.');
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  get f() { return this.fashionForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    if (this.fashionForm.invalid) {
      return;
    }

    const fashion = this.fashionForm.value;

    if (this.isAddMode) {
      this.fashionService.postFashion(fashion).subscribe({
        next: () => {
          alert('Fashion item added successfully');
          this.router.navigate(['/fashions']);
        },
        error: (err) => {
          console.error('Error adding fashion:', err);
          alert('Failed to add fashion item. Please try again.');
        }
      });
    } else {
      this.fashionService.putFashion(fashion).subscribe({
        next: () => {
          alert('Fashion item updated successfully');
          this.router.navigate(['/fashions']);
        },
        error: (err) => {
          console.error('Error updating fashion:', err);
          alert('Failed to update fashion item. Please try again.');
        }
      });
    }
  }

  cancel(): void {
    this.router.navigate(['/fashions']);
  }
}
