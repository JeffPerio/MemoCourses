import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoListeComponent } from './memo-liste.component';

describe('MemoListeComponent', () => {
  let component: MemoListeComponent;
  let fixture: ComponentFixture<MemoListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemoListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemoListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
