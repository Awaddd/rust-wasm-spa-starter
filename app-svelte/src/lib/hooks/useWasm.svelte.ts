import init from '../../../../pkg/wasm.js';

export default function useWasm() {
	let wasmOnline = $state(true);

	$effect(() => {
		async function run() {
			try {
				await init();
			} catch (error) {
				console.error('Error initializing Rust WASM module:', error);
				wasmOnline = false;
			}
		}

		run();
	});

	return {
		get value() {
			return wasmOnline;
		}
	};
}
