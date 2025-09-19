import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/docs/virtual-machines/pre-configured-vms',
        destination: '/docs/virtual-machines/vm-templates',
        permanent: true,
      },
    ];
  },
};

export default withMDX(config);
