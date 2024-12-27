let initialized = false;

export const initJuno = async () => {
  if (!initialized) {
    const { initJuno: init } = await import('@junobuild/core');
    await init({
      satelliteId: 'svftd-daaaa-aaaal-adr3a-cai'
    });
    initialized = true;
  }
};

export const getUserData = async () => {
  try {
    const { getDoc } = await import('@junobuild/core');
    const user = await getDoc({
      collection: 'user',
      key: 'icofm-qqqrs-aqxwl-cbdbk-qkih6-tbopi-qjz5x-lcmz4-hgt5p-cvtc5-tae'
    });
    return user?.data;
  } catch (err) {
    console.error('Error fetching user:', err);
    return null;
  }
};