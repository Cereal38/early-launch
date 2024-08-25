import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailListItemComponent } from './email-list-item.component';

describe('EmailListItemComponent', () => {
  let component: EmailListItemComponent;
  let fixture: ComponentFixture<EmailListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmailListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
