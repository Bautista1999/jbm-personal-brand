import { initJuno as initJunoCore, listDocs } from '@junobuild/core';

export const initJuno = async () => {
  await initJunoCore({
    satelliteId: 'svftd-daaaa-aaaal-adr3a-cai'
  });
};

export const getProfile = async () => {
  try {
    const result = await listDocs('profile', {});
    return result[0];
  } catch (err) {
    console.error('Error fetching profile:', err);
    return null;
  }
};