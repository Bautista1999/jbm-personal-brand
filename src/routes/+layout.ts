import { initJuno } from '@junobuild/core';

export const load = async () => {
  if (typeof window !== 'undefined') {
    await initJuno({
      satelliteId: 'svftd-daaaa-aaaal-adr3a-cai',
      container: document.documentElement
    });
  }
};