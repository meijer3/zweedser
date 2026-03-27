export default function HeroSection() {
	return (
		<section
			class="w-full relative bg-cover bg-center min-h-[70vh] flex items-center"
			style={{ "background-image": "url('/images/20221030111534.jpg')" }}
		>
			<div class="absolute inset-0 bg-lavender/60" />
			<div class="relative max-w-[800px] mx-auto px-4 py-24 text-white text-center">
				<h1 class="text-4xl md:text-6xl font-bold mb-4">Zweedser</h1>
				<p class="text-lg md:text-xl text-white/80 mb-8">
					Leer Zweeds vanuit het hart van Skåne
				</p>
				<a
					href="#cursussen"
					class="btn btn-lg bg-meadow border-meadow text-white hover:bg-meadow-light hover:border-meadow-light"
				>
					Bekijk cursussen
				</a>
			</div>
		</section>
	);
}
