// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://sntolo.com", // Change this to your production URL.
	description:
		"Sitio oficial de la banda Sntolo", // Change this to be your website's description.
	type: "website",
	image: {
		url: "https://sntolo.com/wp-content/uploads/2023/08/sntoloLogo.webp", // Change this to your website's thumbnail.
		alt: "Sntolo Sitio Oficial", // Change this to your website's thumbnail description.
		width: 1200,
		height: 630
	},
	siteName: "Sntolo", // Change this to your website's name,
	twitter: {
		card: "summary_large_image"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Sntolo", // Change this to your website's name.
	short_name: "Sntolo", // Change this to your website's short name.
	description:
		"Sitio oficial de la banda Sntolo", // Change this to your websites description.
	theme_color: "#bc890e", // Change this to your primary color.
	background_color: "#000000", // Change this to your background color.
	display: "minimal-ui",
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}
