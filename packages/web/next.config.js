/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoBase = '/marketplace-skills-embratur';

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isProd ? repoBase : '',
  assetPrefix: isProd ? repoBase : '',
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repoBase : '',
  },
  transpilePackages: ['@embratur/skills-catalog'],
};

module.exports = nextConfig;
