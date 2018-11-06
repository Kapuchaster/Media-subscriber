import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TileCreatorComponent } from './tile-creator.component';

describe('TileCreatorComponent', () => {
  let component: TileCreatorComponent;
  let fixture: ComponentFixture<TileCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TileCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TileCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
