import { setCoursesOpen } from "./CoursesSection";

export default function HeroSection() {
	return (
		<section
			class="w-full relative bg-cover bg-center min-h-[70vh] flex flex-col"
			style={{ "background-image": "url('/images/20221030111534.jpg')" }}
		>
			<div class="absolute inset-0 bg-cream/70" />
			<div class="relative max-w-[840px] mx-auto px-6 md:px-8 py-28 text-black text-center flex-1 flex flex-col items-center justify-center">
				<h1 class="text-4xl md:text-6xl font-bold mb-4">Zweedser</h1>
				<p class="text-lg md:text-xl text-black/80 mb-8">
					Taal en cultuur gaan hand in hand
					<br />
					Kom bij ons online volgen met op maat les
				</p>
				<button
					type="button"
					class="btn btn-lg bg-meadow border-meadow text-white hover:bg-meadow-light hover:border-meadow-light"
					onClick={() => setCoursesOpen(true)}
				>
					Bekijk cursussen
				</button>
			</div>
			<div class="relative w-full">
				<svg
					viewBox="0 0 1440 120"
					preserveAspectRatio="none"
					role="presentation"
					class="block w-full h-[60px] md:h-[80px] lg:h-[100px]"
				>
					<path
						d="M0,120 C240,40 480,100 720,60 C960,20 1200,80 1440,40 L1440,120 Z"
						fill="#d4e4cb"
					/>
				</svg>
			</div>
		</section>
	);
}
