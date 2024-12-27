import { listDocs } from '@junobuild/core';

export const load = async () => {
  try {
    const result = await listDocs('profile', {});
    return { profile: result[0] };
  } catch (err) {
    console.error('Error fetching profile:', err);
    return { profile: null };
  }
};
