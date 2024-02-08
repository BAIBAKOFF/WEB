export const ENV = {
  endpoint:
    process.env.NODE_ENV === 'development'
      ? 'http://46.8.220.209:3001/graphql'
      : 'http://46.8.220.209:3001/graphql',
  subscriptionEndpoint:
    process.env.NODE_ENV === 'development'
      ? 'ws://46.8.220.209:3001/graphql'
      : 'ws://46.8.220.209:3001/graphql',
};
