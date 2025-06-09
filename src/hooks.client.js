import { initJuno } from '@junobuild/core';

initJuno({
  satelliteId: 'svftd-daaaa-aaaal-adr3a-cai'
});

export function handleError(error) {
  console.error('Client Error:', error);
}

export function init() {
  // any client-side initialization logic can go here
}