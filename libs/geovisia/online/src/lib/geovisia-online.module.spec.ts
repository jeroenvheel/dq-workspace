import { async, TestBed } from '@angular/core/testing';
import { GeovisiaOnlineModule } from './geovisia-online.module';

describe('GeovisiaOnlineModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GeovisiaOnlineModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GeovisiaOnlineModule).toBeDefined();
  });
});
