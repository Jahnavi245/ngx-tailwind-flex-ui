import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-input',
  imports: [FormsModule,CommonModule],
  standalone: true,
  templateUrl: './input.component.html',
  styles: [], // No inline styles; Tailwind handles it
})
export class InputComponent {
  @Input() placeholder = '';
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() type: 'text' | 'number' | 'password' | 'email' = 'text';
  @Input() value: string | number = ''; // Specify a different type instead of `any`
  @Input() class = ''; // Allow users to pass custom Tailwind classes
  @Input() hint = '';
  @Input() error = '';
  @Input() counter?: number; // Optional character counter
  @Input() prefix = false;
  @Input() suffix = false;
}
