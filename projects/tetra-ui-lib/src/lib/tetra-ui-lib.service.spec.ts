import { TestBed } from '@angular/core/testing';

import { TetraUiLibService } from './tetra-ui-lib.service';

describe('TetraUiLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TetraUiLibService = TestBed.get(TetraUiLibService);
    expect(service).toBeTruthy();
  });
});
