import { async, TestBed } from '@angular/core/testing';
import { GeovisiaAddonStreetsmartModule } from './geovisia-addon-streetsmart.module';

describe('GeovisiaAddonStreetsmartModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GeovisiaAddonStreetsmartModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GeovisiaAddonStreetsmartModule).toBeDefined();
  });
});
