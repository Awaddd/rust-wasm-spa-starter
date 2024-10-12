use std::sync::{Arc, Mutex};
use once_cell::sync::Lazy;
use crate::counter::CounterCtx;

pub struct Context {
    pub counter: CounterCtx,
}

impl Context {
    fn new() -> Context {
        Context {
            counter: CounterCtx::new(0)
        }
    }
}

pub static CONTEXT: Lazy<Arc<Mutex<Context>>> = Lazy::new(|| { Arc::new(Mutex::new(Context::new())) });
