import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyZoneComponent } from './my-zone.component';

describe('MyZoneComponent', () => {
  let component: MyZoneComponent;
  let fixture: ComponentFixture<MyZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
