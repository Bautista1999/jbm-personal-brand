import { initJuno, getProfile } from '$lib/juno';

export const load = async () => {
  await initJuno();
  const profile = await getProfile();
  return { profile };
};