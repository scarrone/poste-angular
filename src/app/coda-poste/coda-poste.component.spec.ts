import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodaPosteComponent } from './coda-poste.component';

describe('CodaPosteComponent', () => {
  let component: CodaPosteComponent;
  let fixture: ComponentFixture<CodaPosteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodaPosteComponent]
    });
    fixture = TestBed.createComponent(CodaPosteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
