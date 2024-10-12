import { useEffect, useState } from "preact/hooks";

type RustEvent<T> = {
  value: T;
  message?: string;
};

type EventId = "app_started" | "counter_updated" | "counter_limit_exceeded";

export function useRustCtx<T>(eventId: EventId, initialValue: T) {
  const [value, setValue] = useState(initialValue);
  const [message, setMessage] = useState<string | undefined>();

  useEffect(() => {
    const handleEvent = (customEvent: CustomEvent<string>) => {
      const event = JSON.parse(customEvent.detail) as RustEvent<T>;
      console.log(event.message, event.value);
      setValue(event.value);
      setMessage(event.message);
    };

    window.addEventListener(eventId, handleEvent as EventListener);

    return () => {
      window.removeEventListener(eventId, handleEvent as EventListener);
    };
  }, []);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return [value, message] as const;
}
