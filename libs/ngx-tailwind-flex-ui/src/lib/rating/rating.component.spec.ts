import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RatingComponent } from './rating.component';
import { CommonModule } from "@angular/common";

describe('RatingComponent', () => {
  let component: RatingComponent;
  let fixture: ComponentFixture<RatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, RatingComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update rating on click', () => {
    component.setRating(3);
    expect(component.value).toBe(3);
  });

  it('should emit valueChange when rating is set', () => {
    const emitSpy = jest.spyOn(component.valueChange, 'emit');
    component.setRating(4);
    expect(emitSpy).toHaveBeenCalledWith(4);
  });
});
