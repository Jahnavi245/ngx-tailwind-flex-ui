import { Component, EventEmitter, Input, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-radio-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radiobutton.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioButtonComponent),
      multi: true,
    },
  ],
})
export class RadioButtonComponent implements ControlValueAccessor {
  @Input() value!: string;
  @Input() name!: string;
  @Input() checked = false;  
  @Input() disabled = false;  

  @Output() selectionChange = new EventEmitter<string>(); 
  @Output() radioClick = new EventEmitter<Event>();  

  onChangeFn: (value: string) => void = () => { console.log('Value changed:', this.value); };
  onTouchedFn: () => void = () => { console.log('Touched'); };

  writeValue(value: string): void {
    this.checked = this.value === value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleChange(): void {
    console.log('Radio button changed:');
    if (!this.disabled) {
      this.onChangeFn(this.value);
      this.selectionChange.emit(this.value);
    }
  }

  handleClick(): void {
    console.log('Radio button clicked:');
    if (!this.disabled) {
      this.radioClick.emit();
    }

  }
}
