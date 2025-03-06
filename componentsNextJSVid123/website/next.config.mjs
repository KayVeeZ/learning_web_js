/** @type {import('next').NextConfig} */
const nextConfig = {
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'letsenhance.io',
              port: '',
              search: '',
            },
          ],
        },
};

export default nextConfig;
