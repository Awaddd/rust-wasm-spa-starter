use wasm_bindgen::prelude::*;

#[wasm_bindgen(module = "/js/lib.js")]
extern "C" {
    pub fn fire_js_event(event_id: String, data: String);
}

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    pub fn log(s: String);
}
