import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { i18n } from "./i18n";
import { createElement } from "react";
import { Icon } from "@iconify/react";

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
	// it assigns a URL to your pages
	baseUrl: "/",
	source: docs.toFumadocsSource(),
	icon(icon) {
		if (!icon) return;
		return createElement(Icon, { icon: icon });
	},
	i18n,
});
