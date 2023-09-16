/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next"
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      // {
      //   protocol:"http",
      //   hostname:"localhost:3000"
      // }
    ],
  },
}

export default withPlaiceholder(nextConfig)
