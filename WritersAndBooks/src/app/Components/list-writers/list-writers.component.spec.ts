import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWritersComponent } from './list-writers.component';

describe('ListWritersComponent', () => {
  let component: ListWritersComponent;
  let fixture: ComponentFixture<ListWritersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWritersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListWritersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
