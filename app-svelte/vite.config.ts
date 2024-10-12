import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.wasm'],
	server: {
		port: 5173,
		fs: {
			allow: ['..'] // Adjust this based on your directory structure
		}
	}
});
