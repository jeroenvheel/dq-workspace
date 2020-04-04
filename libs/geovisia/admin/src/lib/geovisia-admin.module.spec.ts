import { async, TestBed } from '@angular/core/testing';
import { GeovisiaAdminModule } from './geovisia-admin.module';

describe('GeovisiaAdminModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GeovisiaAdminModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GeovisiaAdminModule).toBeDefined();
  });
});
