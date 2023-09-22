import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterUpdateClientsComponent } from './register-update-clients.component';

describe('RegisterUpdateClientsComponent', () => {
  let component: RegisterUpdateClientsComponent;
  let fixture: ComponentFixture<RegisterUpdateClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterUpdateClientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterUpdateClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
