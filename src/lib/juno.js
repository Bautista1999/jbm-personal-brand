import { Bridge } from '@juno-bridge/api';

export const bridge = new Bridge({
  satelliteId: 'svftd-daaaa-aaaal-adr3a-cai'
});

export const initJuno = async () => {
  await bridge.initialize();
};

export const getProfile = async () => {
  return await bridge.query('profile', 'get');
};

export const setProfile = async (data) => {
  return await bridge.update('profile', 'set', data);
};