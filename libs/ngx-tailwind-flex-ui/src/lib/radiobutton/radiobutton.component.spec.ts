import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RadioButtonComponent } from './radiobutton.component';

describe('RadioButtonComponent', () => {
  let component: RadioButtonComponent;
  let fixture: ComponentFixture<RadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, RadioButtonComponent], // Standalone component import
    }).compileComponents();

    fixture = TestBed.createComponent(RadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit selectionChange event when selected', () => {
    jest.spyOn(component.selectionChange, 'emit'); // ✅ Fixed for Jest
    component.handleChange();
    expect(component.selectionChange.emit).toHaveBeenCalledWith(component.value);
  });

  it('should be disabled when set', () => {
    component.disabled = true;
    fixture.detectChanges();
    const input = fixture.nativeElement.querySelector('input');
    expect(input.disabled).toBeTruthy();
  });
});
