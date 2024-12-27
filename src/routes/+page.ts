import { getUserData } from '$lib/juno';

export const load = async () => {
  const userData = await getUserData();
  return { userData };
};