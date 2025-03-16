/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["cdn.sanity.io"]
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"]
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
						value: "application/octet-stream" // Ensures proper file handling
					}
				]
			}
		];
	}
};

module.exports = nextConfig;
