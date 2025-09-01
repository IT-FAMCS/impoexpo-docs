import type { Translations } from "fumadocs-ui/i18n";
import "../global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { i18n } from "@/lib/i18n";
import { defineI18nUI } from "fumadocs-ui/i18n";

const inter = Inter({
	subsets: ["latin", "cyrillic"],
});

const { provider } = defineI18nUI(i18n, {
	translations: {
		en: {
			displayName: "English",
		},
		ru: {
			search: "Поиск",
			searchNoResult: "Ничего не найдено",
			toc: "На этой странице",
			tocNoHeadings: "Нет заголовков",
			lastUpdate: "Обновлено",
			chooseLanguage: "Выберите язык",
			nextPage: "Следующая страница",
			previousPage: "Предыдущая страница",
			chooseTheme: "Тема",
			editOnGithub: "Редактировать на Github",
			displayName: "Русский",
		},
	},
});

export default async function Layout({
	params,
	children,
}: {
	params: Promise<{ lang: string }>;
	children: ReactNode;
}) {
	const lang = (await params).lang;

	return (
		<html lang={lang} className={inter.className} suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<RootProvider i18n={provider(lang)}>{children}</RootProvider>
			</body>
		</html>
	);
}
