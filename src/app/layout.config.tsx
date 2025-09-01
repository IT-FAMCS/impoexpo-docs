import { i18n } from "@/lib/i18n";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { GithubInfo } from "fumadocs-ui/components/github-info";
import IconImage from "./icon.png";
import Image from "next/image";

export function baseOptions(locale: string): BaseLayoutProps {
	return {
		i18n,
		nav: {
			title: (
				<>
					<Image width={24} height={24} alt="impoexpo logo" src={IconImage} />
					impoexpo
				</>
			),
		},
		links: [
			{
				type: "custom",
				children: (
					<GithubInfo owner="IT-FAMCS" repo="impoexpo" className="lg:-mx-2" />
				),
			},
		],
	};
}
