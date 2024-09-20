import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

const options = { pretty: true, reload: true };
const locals = { name: 'Flavien' };

export default defineConfig({
	plugins: [
		pugPlugin(options, locals),
		ViteImageOptimizer({
			jpg: {
				quality: 80,
			},
			png: {
				quality: 80,
			},
			webp: {
				quality: 80,
			},
			avif: {
				quality: 60,
			},
		}),
	],
});
