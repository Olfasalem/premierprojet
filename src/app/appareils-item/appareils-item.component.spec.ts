import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilsItemComponent } from './appareils-item.component';

describe('AppareilsItemComponent', () => {
  let component: AppareilsItemComponent;
  let fixture: ComponentFixture<AppareilsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppareilsItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppareilsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
