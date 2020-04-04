import { async, TestBed } from '@angular/core/testing';
import { GeovisiaComponentsModule } from './geovisia-components.module';

describe('GeovisiaComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GeovisiaComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GeovisiaComponentsModule).toBeDefined();
  });
});
