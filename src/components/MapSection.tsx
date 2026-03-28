import { createSignal } from "solid-js";

export default function MapSection() {
	const [active, setActive] = createSignal(false);

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
				onMouseLeave={() => setActive(false)}
			>
				<div
					class="absolute inset-0 z-10 touch-none"
					classList={{ "pointer-events-none": active() }}
					onWheel={(e) => {
						if (e.ctrlKey) {
							setActive(true);
						}
					}}
				/>
				<iframe
					title="Kaart van Zweden"
					src="https://www.openstreetmap.org/export/embed.html?bbox=10.0,55.0,21.0,64.0&layer=mapnik&marker=55.9333,13.5417"
					class="w-full h-80 md:h-112.5 border-0 pointer-events-none md:pointer-events-auto"
					loading="lazy"
				/>
			</div>
		</section>
	);
}
