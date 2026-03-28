import { For } from "solid-js";

const mistakes = [
	{
		wrong: "Hur heter du?",
		right: "Vad heter du?",
		explanation:
			'In het Nederlands zeg je "hoe heet je", maar in het Zweeds gebruik je "vad" (wat), niet "hur" (hoe).',
		category: "woordkeuze",
	},
	{
		wrong: "mögligt",
		right: "möjligt",
		explanation:
			'"Möglig" betekent schimmelig! "Möjlig" betekent mogelijk. Eén letter verschil, heel andere betekenis.',
		category: "valse vriend",
	},
	{
		wrong: "sju ≈ tjugo",
		right: "sju (7) ≠ tjugo (20)",
		explanation:
			"Voor Nederlanders klinken 7 en 20 bijna hetzelfde. Let op: sju heeft een kort sj-geluid, tjugo begint met een tj-klank.",
		category: "uitspraak",
	},
	{
		wrong: "Jag vill INTE ha kaffe",
		right: "Jag vill inte ha KAFFE",
		explanation:
			'In het Zweeds benadruk je het woord waar de betekenis zit, niet de negatie. "Inte" is onbeklemtoond — de klemtoon ligt op wat je wél of níet wilt.',
		category: "klemtoon",
	},
	{
		wrong: "Han inte kommer",
		right: "...att han inte kommer",
		explanation:
			'In bijzinnen staat de negatie (inte) vóór het werkwoord: "Jag vet att han inte kommer", niet erna.',
		category: "grammatica",
	},
	{
		wrong: "var → /war/",
		right: "var → /var/",
		explanation:
			"Zweeds heeft geen W-klank (behalve in leenwoorden). Spreek de V gewoon uit als V, niet als W.",
		category: "uitspraak",
	},
	{
		wrong: "stad → /stat/",
		right: "stad → /stad/",
		explanation:
			'Nederlanders verstemlozen de D aan het eind van een woord ("stat"). In het Zweeds spreek je de D altijd uit, ook aan het einde: stad, bred, god.',
		category: "uitspraak",
	},
];

export default function CommonMistakesSection() {
	return (
		<section class="w-full">
			<div class="max-w-[800px] mx-auto px-4 py-16">
				<h2 class="text-3xl font-bold text-forest mb-2">
					Veelgemaakte fouten
				</h2>
				<p class="text-base-content/60 mb-8">
					Als Nederlandstalige heb je een enorme voorsprong bij het leren
					van Zweeds. Maar juist die gelijkenis zorgt voor typische
					valkuilen. Herken je deze fouten?
				</p>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<For each={mistakes}>
						{(item) => (
							<div class="card bg-white shadow-sm">
								<div class="card-body p-4">
									<div class="flex items-start justify-between gap-2">
										<div class="space-y-1 flex-1">
											<div class="flex items-center gap-2 text-forest/40 line-through">
												<span class="text-lg">✗</span>
												<span class="font-mono text-sm">
													{item.wrong}
												</span>
											</div>
											<div class="flex items-center gap-2 text-forest">
												<span class="text-lg">✓</span>
												<span class="font-mono text-sm font-semibold">
													{item.right}
												</span>
											</div>
										</div>
										<span class="badge badge-sm bg-meadow/15 text-forest-light border-0 text-xs">
											{item.category}
										</span>
									</div>
									<p class="text-sm text-base-content/70 mt-2">
										{item.explanation}
									</p>
								</div>
							</div>
						)}
					</For>
				</div>
			</div>
		</section>
	);
}
