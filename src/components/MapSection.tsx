export default function MapSection() {
	return (
		<section class="w-full bg-white">
			<div class="max-w-[800px] mx-auto px-4 py-16">
				<h2 class="text-3xl font-bold text-forest mb-2">Höör, Skåne</h2>
				<p class="text-base-content/60 mb-8">
					Vanuit het zuiden van Zweden, omringd door beuken en meren, helpen wij
					je op weg met de Zweedse taal.
				</p>
				<div class="rounded-lg overflow-hidden shadow-sm">
					<iframe
						title="Kaart van Höör"
						src="https://www.openstreetmap.org/export/embed.html?bbox=13.45,55.88,13.65,55.98&layer=mapnik&marker=55.9333,13.5417"
						class="w-full h-64 md:h-80 border-0"
						loading="lazy"
					/>
				</div>
			</div>
		</section>
	);
}
