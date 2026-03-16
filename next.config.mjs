import { withContentlayer } from "next-contentlayer";


const nextConfig = {
  experimental: {
    serverActions: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "tailwindui.com",
      "images.unsplash.com",
      "cdn.dribbble.com",
      "m.media-amazon.com",
      "ik.imagekit.io",
    ],
  },
};

export default withContentlayer(nextConfig);


