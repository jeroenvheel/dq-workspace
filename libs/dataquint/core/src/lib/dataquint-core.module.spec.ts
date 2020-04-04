import { async, TestBed } from '@angular/core/testing';
import { DataquintCoreModule } from './dataquint-core.module';

describe('DataquintCoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataquintCoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataquintCoreModule).toBeDefined();
  });
});
