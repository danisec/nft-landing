module.exports = {
  reactStrictMode: true,

  env: {
    appName: "nftlanding",
  },

  async rewrites() {
    return [
      {
        source: "/login",
        destination: "/auth/login",
      },

      {
        source: "/register",
        destination: "/auth/register",
      },
    ];
  },
};
