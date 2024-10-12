use serde::Serialize;

#[derive(Serialize)]
pub struct AppConfig {
    pub count: u32
}

impl AppConfig {
    pub fn new(count: u32) -> AppConfig {
        AppConfig {
            count
        }
    }
}
