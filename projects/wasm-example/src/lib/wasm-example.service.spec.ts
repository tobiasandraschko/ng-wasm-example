import { TestBed } from '@angular/core/testing';

import { WasmExampleService } from './wasm-example.service';

describe('WasmExampleService', () => {
  let service: WasmExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WasmExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
