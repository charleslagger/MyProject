import { TestBed } from '@angular/core/testing';

import { ComposerRestService } from './composer-rest-service.service';

describe('ComposerRestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComposerRestService = TestBed.get(ComposerRestService);
    expect(service).toBeTruthy();
  });
});
