import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
  
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'lib-otp-input',
  standalone: true,
  imports: [CommonModule, FormsModule], // Ensure FormsModule is imported
  templateUrl: './pin-input.component.html',
  styles: [],
})
export class PinInputComponent implements AfterViewInit {
  @Input() length = 6; // Default 6-digit OTP
  @Input() type = 'number'; // Accepts only numbers by default
  @Input() mask = false; // Mask input like passwords
  @Input() autoSubmit = false; // Auto-submit when complete
  @Input() disabled = false; // Disable input
  @Input() customClass = ''; // Custom styling
  @Input() pin = ''; // Ensure property exists
  @Input() preventPaste = false;
  @Output() completed = new EventEmitter<string>(); // Emits OTP when complete

  @ViewChildren('otpInput') inputBoxes!: QueryList<ElementRef>;
  otpValues: string[]  = [];

  constructor() {
    this.otpValues = new Array(this.length).fill('');
  }

  ngAfterViewInit() {
    setTimeout(() => this.inputBoxes.get(0)?.nativeElement.focus(), 100);
  }

  /** Handles user input in OTP fields */
  onInput(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    // Allow only numbers if type is 'number'
    if (this.type === 'number' && !/^\d$/.test(value)) {
      input.value = '';
      return;
    }

    this.otpValues[index] = value;

    // Move to the next input box if a digit is entered
    if (value && index < this.length - 1) {
      this.inputBoxes.get(index + 1)?.nativeElement.focus();
    }

    // Emit OTP if all fields are filled
    if (this.otpValues.every((v) => v !== '')) {
      this.emitOTP();
    }
  }

  /** Handles Backspace key for moving to the previous field */
  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && !this.otpValues[index] && index > 0) {
      this.inputBoxes.get(index - 1)?.nativeElement.focus();
    }
  }

  /** Handles pasting OTP values */
  onPaste(event: ClipboardEvent) {
    if (this.preventPaste) {
      event.preventDefault();
      return;
    }

    event.preventDefault();
    const pasteData = event.clipboardData?.getData('text') ?? '';

    // Validate if the pasted data length matches the OTP length
    if (pasteData.length === this.length && /^[a-zA-Z0-9]+$/.test(pasteData)) {
      this.otpValues = pasteData.split('');
      this.emitOTP();
    }
  }

  /** Emits the completed OTP */
  public emitOTP() {
    const otp = this.otpValues.join('');
    if (this.autoSubmit) {
      this.completed.emit(otp);
    }
  }
  
}