import { async, TestBed } from '@angular/core/testing';
import { DataquintGisModule } from './dataquint-gis.module';

describe('DataquintGisModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataquintGisModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataquintGisModule).toBeDefined();
  });
});
