export function fire_js_event(eventId, detail) {
  if (!eventId) return;

  window.dispatchEvent(new CustomEvent(eventId, { detail }));
}
