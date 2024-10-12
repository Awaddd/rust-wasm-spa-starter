use serde::Serialize;
use strum_macros::Display;

use crate::bindings::fire_js_event;

pub fn fire_event<T: Serialize>(event: Event, data: EventData<T>) {
    let event_id = event.to_string();

    if let Ok(json_data) = serde_json::to_string(&data) {
        fire_js_event(event_id, json_data);
    }
}

#[derive(Serialize, Display)]
pub enum Event {
    #[strum(serialize = "app_started")]
    AppStarted,

    #[strum(serialize = "counter_updated")]
    CounterUpdated,

    #[strum(serialize = "counter_limit_exceeded")]
    CounterLimitExceeded
}

#[derive(Serialize)]
pub struct EventData<T: Serialize> {
    pub value: T,
    pub message: Option<String>,
}
