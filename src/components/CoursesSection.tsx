import { For } from "solid-js";

const courses = [
	{
		title: "Beginners",
		description:
			"De basis van het Zweeds: uitspraak, grammatica en dagelijkse zinnen.",
		level: "A1–A2",
	},
	{
		title: "Gevorderden",
		description:
			"Verdiep je woordenschat en leer complexere grammaticale structuren.",
		level: "B1–B2",
	},
	{
		title: "Conversatie",
		description: "Oefen spreken in kleine groepen met echte gesprekssituaties.",
		level: "Alle niveaus",
	},
];

export default function CoursesSection() {
	return (
		<section id="cursussen" class="w-full bg-forest text-white">
			<div class="max-w-[800px] mx-auto px-4 py-16">
				<h2 class="text-3xl font-bold mb-2">Cursussen</h2>
				<p class="text-white/60 mb-8">Kies de cursus die bij jou past.</p>
				<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
					<For each={courses}>
						{(course) => (
							<div class="card bg-white/10 backdrop-blur">
								<div class="card-body">
									<span class="badge badge-sm bg-meadow border-meadow text-white">
										{course.level}
									</span>
									<h3 class="card-title text-white">{course.title}</h3>
									<p class="text-white/70 text-sm">{course.description}</p>
								</div>
							</div>
						)}
					</For>
				</div>
			</div>
		</section>
	);
}
