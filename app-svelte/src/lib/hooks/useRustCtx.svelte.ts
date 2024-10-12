type RustEvent<T> = {
	value: T;
	message?: string;
};

type EventId = 'app_started' | 'counter_updated' | 'counter_limit_exceeded';

export function useRustCtx<T>(eventId: EventId, initialValue: T) {
	let value = $state(initialValue);
	let message = $state<string | undefined>(undefined);

	$effect(() => {
		const handleEvent = (customEvent: CustomEvent<string>) => {
			console.log('Handling event', eventId);
			const event = JSON.parse(customEvent.detail) as RustEvent<T>;

			value = event.value;
			message = event.message;

			if (event.message) {
				console.log(event.message);
			}

			console.log(event.value);
		};

		window.addEventListener(eventId, handleEvent as EventListener);

		return () => {
			window.removeEventListener(eventId, handleEvent as EventListener);
		};
	});

	return {
		get value() {
			return value;
		},
		get message() {
			return message;
		}
	};
}
