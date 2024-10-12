mod bindings;
mod events;
mod counter;
mod app_config;
pub mod context;

use app_config::AppConfig;
use context::CONTEXT;
use events::{fire_event, Event, EventData};
use wasm_bindgen::prelude::wasm_bindgen;

#[wasm_bindgen(start)]
pub fn run_app() {
    let ctx = CONTEXT.lock().unwrap();

    let data = EventData {
        value: AppConfig::new(ctx.counter.value),
        message: None
    };

    fire_event(Event::AppStarted, data);
}
