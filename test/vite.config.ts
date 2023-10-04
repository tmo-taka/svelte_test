import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
        proxy: {
            '/api': {
				target: 'https://wordsapiv1.p.mashape.com',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			}
        },
    }
});
