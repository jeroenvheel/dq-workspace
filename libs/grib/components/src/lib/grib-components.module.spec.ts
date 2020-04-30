import { async, TestBed } from '@angular/core/testing';
import { GribComponentsModule } from './grib-components.module';

describe('GribComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GribComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GribComponentsModule).toBeDefined();
  });
});
