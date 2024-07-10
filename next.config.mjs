import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

const config = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    reactStrictMode: true,
    env: {
      API_URL: process.env.API_URL,
    },
    // other configurations
  };
};

export default config;
