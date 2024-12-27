import { browser } from '$app/environment';

export const load = async () => {
  if (browser) {
    const { initJuno, getDoc } = await import('@junobuild/core');
    await initJuno({
      satelliteId: 'svftd-daaaa-aaaal-adr3a-cai',
      container: document.documentElement
    });
    
    const user = await getDoc('user', 'icofm-qqqrs-aqxwl-cbdbk-qkih6-tbopi-qjz5x-lcmz4-hgt5p-cvtc5-tae');
    return { userData: user?.data };
  }
  return { userData: null };
};