use serde::Serialize;
use wasm_bindgen::prelude::wasm_bindgen;

use crate::{events::{fire_event, Event, EventData}, CONTEXT};

#[derive(Serialize)]
pub struct CounterCtx {
    pub value: u32,
    limit_exceeded_event_fired: bool,
}

impl CounterCtx {
    pub fn new(value: u32) -> CounterCtx {
        CounterCtx {
            value,
            limit_exceeded_event_fired: false
        }
    }
}

#[wasm_bindgen]
pub fn get_counter() -> u32 {
    let ctx = CONTEXT.lock().unwrap();
    ctx.counter.value
}

#[wasm_bindgen]
pub fn increment() {
    let mut ctx = CONTEXT.lock().unwrap();
    let counter = &mut ctx.counter;

    counter.value += 1;

    let data = EventData {
        value: counter.value,
        message: Some("Incremented the count".to_string())
    };

    fire_event(Event::CounterUpdated, data);

    if !counter.limit_exceeded_event_fired && counter.value >= 10 {
        let data = EventData {
            value: true,
            message: None,
        };

        fire_event(Event::CounterLimitExceeded, data);
        counter.limit_exceeded_event_fired = true
    }
}

#[wasm_bindgen]
pub fn decrement() {
    let mut ctx = CONTEXT.lock().unwrap();
    let counter = &mut ctx.counter;

    if counter.value > 0 {
        counter.value -= 1;
    }

    let data = EventData {
        value: counter.value,
        message: Some("Decremented the count".to_string())
    };

    fire_event(Event::CounterUpdated, data);
}
