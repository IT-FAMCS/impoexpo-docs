"use client";

import { Info as InfoIcon, Link as LinkIcon } from "lucide-react";
import Link from "fumadocs-core/link";
import { cva } from "class-variance-authority";
import { cn } from "../lib/cn";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import type { ReactNode } from "react";
import { useI18n } from "fumadocs-ui/provider";

export function Info({ children }: { children: ReactNode }): ReactNode {
	return (
		<Popover>
			<PopoverTrigger>
				<InfoIcon className="size-4" />
			</PopoverTrigger>
			<PopoverContent className="prose max-h-[400px] min-w-[220px] max-w-[400px] overflow-auto text-sm prose-no-margin">
				{children}
			</PopoverContent>
		</Popover>
	);
}

interface ObjectType {
	/**
	 * Additional description of the field
	 */
	description?: ReactNode;
	type: string;
	typeDescription?: ReactNode;
	/**
	 * Optional link to the type
	 */
	typeDescriptionLink?: string;
	default?: string;

	required?: boolean;
	deprecated?: boolean;

	io?: "input" | "output";
}

const field = cva("inline-flex flex-row items-center gap-1");
const code = cva(
	"rounded-md bg-fd-secondary p-1 text-fd-secondary-foreground",
	{
		variants: {
			color: {
				primary: "bg-fd-primary/10 text-fd-primary",
				deprecated: "line-through text-fd-primary/50",
			},
		},
	},
);

export function TypeTable({ type }: { type: Record<string, ObjectType> }) {
	const i18n = useI18n();
	return (
		<div className="prose my-6 overflow-auto prose-no-margin">
			<table className="text-sm text-fd-muted-foreground">
				<thead>
					<tr>
						<th className="w-[35%]">
							{i18n.locale === "ru" ? "Свойство" : "Property"}
						</th>
						<th className="w-[10%]">
							{i18n.locale === "ru" ? "Порт" : "Port"}
						</th>
						<th className="w-[30%]">{i18n.locale === "ru" ? "Тип" : "Type"}</th>
						<th className="w-1/4">
							{i18n.locale === "ru" ? "Значение по умолчанию" : "Default value"}
						</th>
					</tr>
				</thead>
				<tbody>
					{Object.entries(type).map(([key, value]) => (
						<tr key={key}>
							<td>
								<div className={cn(field(), "flex-col items-start")}>
									<code
										className={cn(
											code({
												color: value.deprecated ? "deprecated" : "primary",
											}),
										)}
									>
										{key}
										{!value.required && "?"}
									</code>
									{value.description ? (
										<p className="!m-0">{value.description}</p>
									) : null}
								</div>
							</td>
							<td>
								{value.io === "input"
									? i18n.locale === "ru"
										? "ввод"
										: "input"
									: i18n.locale === "ru"
										? "вывод"
										: "output"}
							</td>
							<td>
								<div className={cn(field(), "flex-col items-start")}>
									<div className="flex flex-row items-center gap-2">
										<code className={code()}>{value.type}</code>
										{value.typeDescriptionLink ? (
											<Link href={value.typeDescriptionLink}>
												<LinkIcon className="size-4 text-fd-muted-foreground" />
											</Link>
										) : null}
									</div>

									{value.typeDescription ? (
										<p className="!m-0">{value.typeDescription}</p>
									) : null}
								</div>
							</td>
							<td>
								{value.default ? (
									<code className={code()}>{value.default}</code>
								) : (
									"-"
								)}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
