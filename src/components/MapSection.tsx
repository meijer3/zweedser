import { createSignal } from "solid-js";

export default function MapSection() {
	const [showOverlay, setShowOverlay] = createSignal(true);

	return (
		<section class="w-screen relative left-1/2 -translate-x-1/2 overflow-hidden bg-white">
			<div class="max-w-[800px] mx-auto px-4 pt-16 pb-8">
				<h2 class="text-3xl font-bold text-forest mb-2">Höör, Skåne</h2>
				<p class="text-base-content/60">
					Vanuit het zuiden van Zweden, omringd door beuken en meren, helpen wij
					je op weg met de Zweedse taal.
				</p>
			</div>
			<div
				class="relative"
				onMouseLeave={() => setShowOverlay(true)}
			>
				{showOverlay() && (
					<div
						class="absolute inset-0 z-10 flex items-center justify-center cursor-default"
						onWheel={(e) => {
							if (e.ctrlKey) {
								setShowOverlay(false);
							}
						}}
					>
						<span class="bg-black/50 text-white text-sm px-3 py-1.5 rounded-full pointer-events-none opacity-0 transition-opacity group-hover:opacity-100">
							Ctrl + scroll om te zoomen
						</span>
					</div>
				)}
				<iframe
					title="Kaart van Zweden"
					src="https://www.openstreetmap.org/export/embed.html?bbox=8.0,55.0,25.0,69.5&layer=mapnik&marker=55.9333,13.5417"
					class="w-full h-80 md:h-112.5 border-0"
					loading="lazy"
				/>
			</div>
		</section>
	);
}
