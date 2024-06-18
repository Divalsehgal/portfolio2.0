import withSourceMaps from '@zeit/next-source-maps';

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
        // Further custom webpack configuration
        return config;
    },
};

export default withSourceMaps(nextConfig);
