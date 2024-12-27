import { initJuno as initJunoCore, listDocs, getDoc } from '@junobuild/core';

export const initJuno = async () => {
  await initJunoCore({
    satelliteId: 'svftd-daaaa-aaaal-adr3a-cai'
  });
};

export const getUserData = async () => {
  try {
    const user = await getDoc('user', 'icofm-qqqrs-aqxwl-cbdbk-qkih6-tbopi-qjz5x-lcmz4-hgt5p-cvtc5-tae');
    return user?.data;
  } catch (err) {
    console.error('Error fetching user:', err);
    return null;
  }
};