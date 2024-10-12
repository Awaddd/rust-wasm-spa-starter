import Confetti from 'canvas-confetti';
import { useRustCtx } from './useRustCtx.svelte';

export default function () {
	const limitExceeded = useRustCtx('counter_limit_exceeded', false);

	$effect(() => {
		if (!limitExceeded.value) return;

		Confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.6 }
		});
	});
}
