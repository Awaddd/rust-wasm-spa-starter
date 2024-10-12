# Rust WebAssembly (Wasm) Starter

The goal of this project is to showcase how Rust, WebAssembly, and JavaScript can work together to build performant and interactive single page applications. Rust handles application state and business logic, while the JS framework renders the UI. While Svelte and Preact are used here, they could easily be swapped out for React or any other frontend UI library of your choice.

## Features

- **Rust-Wasm Module**: Written in Rust and compiled to WebAssembly for fast and safe execution in the browser.
- **Svelte/ Preact Frontend**: Lightweight view layer with hooks for seamless interaction with the Rust backend.
- **Event-Driven Architecture**: Custom Rust events fired into the JavaScript context for updating the UI.
- **Tailwind CSS**: Used for minimal, utility-based styling.
- **Counter Example**: Demonstrates event-driven state updates and two-way communication between Rust and the frontend.

## Event-Driven Communication

This app uses an event-driven architecture where Rust events trigger UI updates in the frontend. Some of the events implemented include:

- **`app_started`**: Fired when the Wasm module is successfully initialized.
- **`counter_updated`**: Fired whenever the counter value is changed.
- **`counter_limit_exceeded`**: Fired when the counter exceeds a specific threshold, triggering a confetti animation.

These events are handled in JavaScript using custom hooks (`useRustCtx`) that listen for the events and update the UI accordingly.

## Getting Started

### Prerequisites

- Rust (with `wasm32-unknown-unknown` target installed)
- Node.js (for bundling and serving the frontend)
- wasm-pack (to compile Rust code into WebAssembly)
- npm or yarn (for managing JavaScript dependencies)

### Setup Instructions

1. **Clone the Repository:**

   Open your terminal and run the following command to clone the project:

   ```bash
   git clone https://github.com/Awaddd/rust-wasm-spa-starter
   ```

   Change into the project directory:

   ```bash
   cd rust-wasm-spa-starter
   ```

2. **Install Frontend Dependencies:**

   Navigate to the `app-svelte` or `app-preact` directory:

   ```bash
   cd app-svelte
   ```

   Install the necessary dependencies:

   ```bash
   npm install
   ```

3. **Run the Frontend:**

   Start the development server:

   ```bash
   npm run dev
   ```

4. **Build the Rust-Wasm Module:**

   In a separate terminal, first install `cargo-watch` to enable automated rebuilds on file change:

   ```bash
   cargo install cargo-watch
   ```

   Navigate to the `app-svelte` or `app-preact` directory:

   ```bash
   cd app-svelte
   ```

   Manually build the Wasm module the first time only

   ```bash
   wasm-pack build --target web
   ```

   Then run the script to watch for changes and automatically build the Wasm module:

   ```bash
   npm run watch:wasm
   ```

5. **Open the App:**

   Access the app in your browser at [http://localhost:5173](http://localhost:5173).

## Feedback and Contributions

If you have ideas for improvement or feedback, feel free to contribute, fork the project, or submit an issue. I'm happy to hear any suggestions to make this a better example.
