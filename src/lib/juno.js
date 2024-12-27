import { initJuno, listDocs } from '@junobuild/core';

export const initializeJuno = async () => {
  await initJuno({
    satelliteId: 'svftd-daaaa-aaaal-adr3a-cai'
  });
};

export const getProfile = async () => {
  const result = await listDocs('profile', {});
  return result[0];
};