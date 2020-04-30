import { async, TestBed } from '@angular/core/testing';
import { GribPocketModule } from './grib-pocket.module';

describe('GribPocketModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GribPocketModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GribPocketModule).toBeDefined();
  });
});
