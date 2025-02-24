import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	experimental: {
		workerThreads: false,
		cpus: 1,
        webpackMemoryOptimizations: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "polotnotex.beget.tech",
				pathname: "/wp-content/uploads/**",
			},
		],
        unoptimized: false,
	},
	output: "standalone",
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
