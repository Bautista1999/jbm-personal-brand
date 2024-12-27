import { initJuno, getProfile } from '$lib/juno';

export const load = async () => {
  return { profile: await getProfile() };
};