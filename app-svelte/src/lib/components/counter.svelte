<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { useRustCtx } from '$lib/hooks/useRustCtx.svelte';
	import type { AppConfig } from '$lib/types';
	import { decrement, increment } from '../../../../pkg/wasm';
	import Button from './ui/button/button.svelte';

	let config = useRustCtx<AppConfig | null>('app_started', null);
	let count = useRustCtx<number | null>('counter_updated', null);
</script>

<Card.Root class="text-gray-300">
	<Card.Header>
		<Card.Title>Count</Card.Title>
	</Card.Header>
	<Card.Content>
		<p>The count is: {count.value ?? config.value?.count}</p>
	</Card.Content>
	<Card.Footer class="flex gap-2">
		<Button variant="outline" onclick={decrement}>Decrement</Button>
		<Button variant="outline" onclick={increment}>Increment</Button>
	</Card.Footer>
</Card.Root>
