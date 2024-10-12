<script lang="ts">
	import Counter from '$lib/components/counter.svelte';
</script>

<h1 class="text-3xl font-bold text-gray-300">RWS5</h1>
<h2 class="mt-3 text-xl text-gray-500">Rust -> Wasm -> Svelte 5</h2>

<div class="mt-8 flex flex-col flex-wrap gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
	<Counter />
	<Counter />
	<Counter />
</div>
