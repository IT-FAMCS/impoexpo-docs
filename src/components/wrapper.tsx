import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export function Wrapper(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={cn(
				"justify-center items-center flex rounded-lg bg-radial-[at_bottom] from-blue-500/20 p-0 border border-fd-primary/10 prose-no-margin dark:bg-black/20 [&>*]:max-w-[30%]",
				props.className,
			)}
		>
			{props.children}
		</div>
	);
}
