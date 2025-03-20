/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "yemolfbfuywasvhymyos.supabase.co",
      },
    ],
  },
};

export default nextConfig;
