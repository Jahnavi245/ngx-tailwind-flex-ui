import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RadioButtonComponent } from './radiobutton.component';

describe('RadioButtonComponent', () => {
  let component: RadioButtonComponent;
  let fixture: ComponentFixture<RadioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioButtonComponent], // ✅ Correct way to use standalone components
    }).compileComponents();

    fixture = TestBed.createComponent(RadioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should call handleChange when radio button changes', () => {  
    const spy = jest.spyOn(component, 'handleChange'); // ✅ Correct way in Jest
    const input = fixture.nativeElement.querySelector('input');
    input.dispatchEvent(new Event('change'));
    expect(spy).toHaveBeenCalled(); // ✅ Ensure the method was called
  });

  it('should call handleClick when radio button is clicked', () => {
    const spy = jest.spyOn(component, 'handleClick'); // ✅ Correct way in Jest
    const input = fixture.nativeElement.querySelector('input');
    input.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalled(); // ✅ Ensure the method was called
  });
});
