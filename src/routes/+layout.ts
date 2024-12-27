import { initializeJuno } from '$lib/juno';

export const load = async () => {
  await initializeJuno();
};