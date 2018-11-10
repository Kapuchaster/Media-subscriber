import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityCreatorComponent } from './entity-creator.component';

describe('EntityCreatorComponent', () => {
  let component: EntityCreatorComponent;
  let fixture: ComponentFixture<EntityCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntityCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
