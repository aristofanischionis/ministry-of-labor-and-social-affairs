const config = {
  backend:
    process.env.NODE_ENV === 'production'
      ? 'https://eam-backend.herokuapp.com'
      : 'http://localhost:3001',
};

export default config;
