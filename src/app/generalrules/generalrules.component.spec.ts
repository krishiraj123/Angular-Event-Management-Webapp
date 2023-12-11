import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralrulesComponent } from './generalrules.component';

describe('GeneralrulesComponent', () => {
  let component: GeneralrulesComponent;
  let fixture: ComponentFixture<GeneralrulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralrulesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GeneralrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
