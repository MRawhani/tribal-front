/** @type {import('next').NextConfig} */

const path = require("path");
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["https://tribal-api.onrender.com"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          // {
          //   key: "Content-Security-Policy",
          //   value: `
          //   default-src self;
          //   script-src * 'unsafe-inline' 'unsafe-eval';
          //   style-src * 'unsafe-inline';
          //   img-src * data:;
          //   font-src *;
          //   connect-src *;
          // `,
          // },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
