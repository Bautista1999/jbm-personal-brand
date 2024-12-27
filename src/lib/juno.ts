import { initJuno as initJunoCore, listDocs } from '@junobuild/core';

export const initJuno = async () => {
  await initJunoCore({
    satelliteId: 'svftd-daaaa-aaaal-adr3a-cai'
  });
};

export const getProfile = async () => {
  const result = await listDocs('profile', {});
  return result[0];
};