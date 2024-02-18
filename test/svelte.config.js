import adapter from '@sveltejs/adapter-auto'
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  // base pathの設定
  paths: {
    base: '/',
  },
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    // csp: {
    // 	reportOnly: {
    // 		'script-src': ['self']
    // 	}
    // }
    files: {
      hooks: {
        server: './src/hooks/hooks.server',
        client: './src/hooks/hooks.client',
      },
    },
  },
}

export default config
