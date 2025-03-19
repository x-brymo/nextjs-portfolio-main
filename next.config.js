/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            "cdn.sanity.io",
            "res.cloudinary.com",
            "images.unsplash.com",
            "images.pexels.com",
            "image.shutterstock.com",
            "images.ctfassets.net",
            "images.prismic.io",
            "avatars.githubusercontent.com",
            "raw.githubusercontent.com",
            'github.com'
        ],
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,   
            use: ["@svgr/webpack"],
        });
        return config;
    },
    async headers() {
        return [
            {
                source: "/db/:path*", // Apply to all files inside /db/
                headers: [
                    {
                        key: "Content-Type",
                        value: "application/octet-stream", // Ensures proper file handling
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;