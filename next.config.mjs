const config = () => {
  return {
    env: {
      API_URL: process.env.API_URL,
      MONGODB_URI: process.env.MONGODB_URI,
    },
  };
};

export default config;
