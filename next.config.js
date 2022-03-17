/** @type {import('next').NextConfig} */

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");

const nextConfig = {
	images: {
		reactStrictMode: true,
		domains: ["images.prismic.io"]
	}
};

module.exports = withPlugins([[withImages]], nextConfig);
