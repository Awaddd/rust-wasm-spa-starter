<script lang="ts">
	import useConfetti from '$lib/hooks/useConfetti.svelte';
	import useWasm from '$lib/hooks/useWasm.svelte';
	import '../app.css';

	let wasmOnline = useWasm();
	useConfetti();
</script>

<!-- svelte-ignore slot_element_deprecated -->
<main class="bg-background text-foreground dark h-screen w-screen p-10">
	{#if !wasmOnline.value}
		<h1 class="text-2xl">Wasm Not Available</h1>
		<p>There was an error initializing the Rust WebAssembly module.</p>
	{:else}
		<slot />
	{/if}
</main>
