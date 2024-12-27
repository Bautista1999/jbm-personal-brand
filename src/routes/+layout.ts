import { browser } from '$app/environment';
import type { Environment } from '@junobuild/core';

// Add these exports for SPA configuration
export const prerender = true;
export const ssr = false;

export const load = async () => {
  if (browser) {
    const { initJuno } = await import('@junobuild/core');

    await initJuno({
      satelliteId: 'svftd-daaaa-aaaal-adr3a-cai',
    } satisfies Environment);
  }

  return {};
};