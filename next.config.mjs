/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  
  // https://randomuser.me/api/portraits/women/65.jpg
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
