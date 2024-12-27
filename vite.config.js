import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { juno } from '@junobuild/vite-plugin';

export default defineConfig({
  plugins: [sveltekit(), juno()],
  build: {
    target: 'esnext'
  }
});