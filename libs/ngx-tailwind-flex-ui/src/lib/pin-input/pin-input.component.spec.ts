import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PinInputComponent } from './pin-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

describe('PinInputComponent', () => {
  let component: PinInputComponent;
  let fixture: ComponentFixture<PinInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, FormsModule, PinInputComponent], 
    }).compileComponents();

    fixture = TestBed.createComponent(PinInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit OTP when all fields are filled', () => {
    // ✅ Ensure `autoSubmit` is set to true so `emitOTP()` works
    component.autoSubmit = true; 

    // ✅ Correctly spy on EventEmitter
    const emitSpy = jest.spyOn(component.completed, 'emit');

    // ✅ Fill OTP fields with values
    component.otpValues = ['1', '2', '3', '4', '5', '6'];

    // ✅ Manually call `emitOTP()`
    component.emitOTP();

    // ✅ Detect changes after manually triggering emission
    fixture.detectChanges();

    // ✅ Assert that the event was emitted with the expected value
    expect(emitSpy).toHaveBeenCalledTimes(1);
    expect(emitSpy).toHaveBeenCalledWith('123456');
  });

});
