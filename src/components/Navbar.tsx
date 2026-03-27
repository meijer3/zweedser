import { A } from "@solidjs/router";

export default function Navbar() {
	return (
		<nav class="w-full bg-forest text-white">
			<div class="max-w-[800px] mx-auto px-4 py-4 flex items-center justify-between">
				<A href="/" class="text-xl font-bold tracking-wide">
					Zweedser
				</A>
				<div class="flex gap-6 text-sm">
					<A href="/" class="hover:text-meadow-light transition-colors">
						Home
					</A>
					<A href="/about" class="hover:text-meadow-light transition-colors">
						Over ons
					</A>
					<A href="/contact" class="hover:text-meadow-light transition-colors">
						Contact
					</A>
				</div>
			</div>
		</nav>
	);
}
