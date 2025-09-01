import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/layout.config";
import { source } from "@/lib/source";
import { Icon } from "@iconify/react";

export default async function Layout({
	params,
	children,
}: {
	params: Promise<{ lang: string }>;
	children: ReactNode;
}) {
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
							<Icon
								color="rgba(0, 111, 238, 0.9)"
								className="w-full h-full"
								icon="material-symbols:book-outline-rounded"
							/>
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
							<Icon
								color="rgba(245, 165, 36, 0.9)"
								className="w-full h-full"
								icon="material-symbols:developer-board-outline-rounded"
							/>
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
