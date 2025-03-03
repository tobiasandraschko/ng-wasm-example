# Rust WASM in Angular Example

This project demonstrates using Rust compiled to WebAssembly (WASM) to speed up calculations in an Angular app.

## Overview

Calculates factorials in both JavaScript and Rust (compiled to WASM). Compares performance.

### Technologies

*   Rust & `wasm-pack`
*   WebAssembly (WASM)
*   Angular

## Implementation

*   **Rust WASM:** `rust-wasm/src/lib.rs` calculates factorials.
*   **Angular:** `angular-app/src/app/app.component.ts` calls both JS and WASM factorial functions and measures time.

## Getting Started

### Prerequisites

*   Node.js, npm, Angular CLI
*   Rust, Cargo, wasm-pack

### Installation

1.  Clone repo.
2.  Build WASM:

    ```bash
    cd rust-wasm
    wasm-pack build --target web --out-dir ../angular-app/src/wasm-example
    cd ..
    ```

3.  Install Angular dependencies:

    ```bash
    cd angular-app
    npm install
    ```

### Running

```bash
ng serve
```

Browse to http://localhost:4200/.


### Usage
Enter a number, click "Calculate", and compare JS vs. WASM performance.