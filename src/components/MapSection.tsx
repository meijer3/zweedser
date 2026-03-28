export default function MapSection() {
	return (
		<section class="w-screen relative left-1/2 -translate-x-1/2"
			style={{ background: "linear-gradient(to bottom, #f0ebe0 50%, #2d5016 50%)" }}>
			<svg
				class="absolute"
				width="0"
				height="0"
				role="presentation"
				aria-hidden="true"
			>
				<defs>
					<clipPath id="map-wave-clip" clipPathUnits="objectBoundingBox">
						<path d="M0,0.08 C0.167,0.12 0.333,0.02 0.5,0.05 C0.667,0.08 0.833,0.12 1,0.08 L1,0.92 C0.833,0.96 0.667,0.86 0.5,0.89 C0.333,0.92 0.167,0.96 0,0.92 Z" />
					</clipPath>
				</defs>
			</svg>
			<div
				class="relative"
				style={{ "clip-path": "url(#map-wave-clip)" }}
			>
				<div class="absolute inset-0 z-10 pointer-events-none" />
				<iframe
					title="Kaart van Zweden"
					src="https://www.openstreetmap.org/export/embed.html?bbox=10.0,55.0,21.0,64.0&layer=mapnik&marker=55.9333,13.5417"
					class="w-full h-100 md:h-125 border-0 pointer-events-none"
					loading="lazy"
				/>
			</div>
		</section>
	);
}
