import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { Icon } from "@iconify/react";

export default async function Layout({
	params,
	children,
}: { params: Promise<{ lang: string }>; children: ReactNode }) {
	const { lang } = await params;

	return (
		<DocsLayout
			sidebar={{
				tabs: [
					{
						title: lang === "ru" ? "Справочник" : "Guide",
						description:
							lang === "ru" ? "Для конечных пользователей" : "For end-users",
						url: "/user",
						icon: (
							<div
								className="rounded-lg p-1.5 shadow-lg ring-2 m-px border [&_svg]:size-6.5 md:[&_svg]:size-5"
								style={
									{
										color: "rgba(0, 111, 238, 0.9)",
										borderColor: "rgba(0, 111, 238, 0.9)",
										"--tw-ring-color": "rgba(0, 111, 238, 0.5)",
									} as object
								}
							>
								<Icon icon="material-symbols:book-outline-rounded" />
							</div>
						),
					},
					{
						title: "API",
						description:
							lang === "ru"
								? "Для разработчиков интеграций"
								: "For integration developers",
						url: "/developer",
						icon: (
							<div
								className="rounded-lg p-1.5 shadow-lg ring-2 m-px border [&_svg]:size-6.5 md:[&_svg]:size-5"
								style={
									{
										color: "rgba(245, 165, 36, 0.9)",
										borderColor: "rgba(245, 165, 36, 0.9)",
										"--tw-ring-color": "rgba(245, 165, 36, 0.5)",
									} as object
								}
							>
								<Icon icon="material-symbols:developer-board-outline-rounded" />
							</div>
						),
					},
				],
			}}
			tree={source.pageTree[lang]}
			{...baseOptions(lang)}
		>
			{children}
		</DocsLayout>
	);
}
