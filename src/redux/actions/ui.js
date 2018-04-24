const START_NETWORK = 'START_NETWORK'
const END_NETWORK = 'END_NETWORK'

export const startNetwork = (payload = 'global') => ({
  type: START_NETWORK,
  payload
});

export const endNetwork = (payload = 'global') => ({
  type: END_NETWORK,
  payload
});