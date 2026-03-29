export default function Footer() {
	return (
		<footer class="w-full bg-forest text-white/70">
			<div class="max-w-[840px] mx-auto px-6 md:px-8 py-10 flex flex-col items-center gap-4 text-center">
				<p class="text-white/60">
					Zweeds leren vanuit het hart van Skåne, omringd door loofbossen en
					meren. Wij helpen je op weg.
				</p>
				<p class="text-sm text-white/40">&copy; {new Date().getFullYear()} Zweedser — Höör, Sverige</p>
			</div>
		</footer>
	);
}
