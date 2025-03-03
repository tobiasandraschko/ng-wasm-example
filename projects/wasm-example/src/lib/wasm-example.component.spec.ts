import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasmExampleComponent } from './wasm-example.component';

describe('WasmExampleComponent', () => {
  let component: WasmExampleComponent;
  let fixture: ComponentFixture<WasmExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WasmExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WasmExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
