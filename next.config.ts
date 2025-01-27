/** @type {import('next').NextConfig} */
const prefix =
	process.env.NODE_ENV === "production"
		? "https://suxghyxn.github.io/resume/"
		: ""

const nextConfig = {
	output: "export",
	assetPrefix: prefix,
	images: { unoptimized: true },
}
export default nextConfig
