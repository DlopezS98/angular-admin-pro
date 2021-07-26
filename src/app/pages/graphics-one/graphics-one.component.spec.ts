import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicsOneComponent } from './graphics-one.component';

describe('GraphicsOneComponent', () => {
  let component: GraphicsOneComponent;
  let fixture: ComponentFixture<GraphicsOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicsOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicsOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
