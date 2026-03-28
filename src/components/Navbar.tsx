import { A } from "@solidjs/router";

export default function Navbar() {
	return (
		<nav class="w-full bg-primary text-primary-content">
			<div class="max-w-[800px] mx-auto px-4 py-5 flex items-center justify-between">
				<A href="/" class="hover:opacity-80 transition-opacity">
					<img src="/logo.svg" alt="Zweedser" class="h-12 w-auto" />
				</A>
				<div class="flex gap-6 text-sm">
					<A href="/" class="hover:text-accent transition-colors">
						Home
					</A>
					<A href="/about" class="hover:text-accent transition-colors">
						Over ons
					</A>
					<A href="/contact" class="hover:text-accent transition-colors">
						Contact
					</A>
				</div>
			</div>
		</nav>
	);
}
