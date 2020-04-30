import { async, TestBed } from '@angular/core/testing';
import { GribOnlineModule } from './grib-online.module';

describe('GribOnlineModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GribOnlineModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GribOnlineModule).toBeDefined();
  });
});
