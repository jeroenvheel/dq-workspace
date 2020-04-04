import { async, TestBed } from '@angular/core/testing';
import { GeovisiaAddonSchouwenModule } from './geovisia-addon-schouwen.module';

describe('GeovisiaAddonSchouwenModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [GeovisiaAddonSchouwenModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(GeovisiaAddonSchouwenModule).toBeDefined();
  });
});
