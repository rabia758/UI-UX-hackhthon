/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          pathname: '/**', // Match all paths under the hostname
        },
      ],
    },
     
    };
    
    export default nextConfig;
    