import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { kitRoutes } from 'vite-plugin-kit-routes'
 
/** @type {import('vite').UserConfig} */
const config = {
  plugins: [
    sveltekit(),
    // ✅ Add the plugin
    kitRoutes()
  ]
}
 
export default defineConfig({
	plugins: [sveltekit(), kitRoutes()]
});
