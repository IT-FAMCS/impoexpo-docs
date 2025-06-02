import type { Translations } from "fumadocs-ui/i18n";
import "../global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
	subsets: ["latin", "cyrillic"],
});

const ru: Partial<Translations> = {
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
};

const locales = [
	{
		name: "English",
		locale: "en",
	},
	{
		name: "Русский",
		locale: "ru",
	},
];

export default async function Layout({
	params,
	children,
}: { params: Promise<{ lang: string }>; children: ReactNode }) {
	const lang = (await params).lang;

	return (
		<html lang={lang} className={inter.className} suppressHydrationWarning>
			<body className="flex flex-col min-h-screen">
				<RootProvider
					i18n={{
						locale: lang,
						locales,
						translations: { ru }[lang],
					}}
				>
					{children}
				</RootProvider>
			</body>
		</html>
	);
}
