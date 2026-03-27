import { For, createSignal } from "solid-js";

const topics = [
	{
		title: "Het Zweedse koningshuis",
		description: "Wie is wie? En hoe vergelijkt het met het Nederlandse?",
	},
	{
		title: "Actualiteit",
		description: "Bespreek het laatste nieuws uit Zweden in het Zweeds.",
	},
	{
		title: "Wonen in Zweden",
		description: "Van BankID tot personnummer — alles over je nieuwe thuis.",
	},
	{
		title: "Kinderen & school",
		description: "Förskola, grundskola en alles daartussenin.",
	},
	{
		title: "Werken",
		description: "Solliciteren, fika-cultuur en de Zweedse werkplek.",
	},
	{
		title: "Zweedse feestdagen",
		description: "Midsommar, Lucia en alles wat je moet weten.",
	},
	{
		title: "Natuur & buitenleven",
		description: "Allemansrätten, wandelen en de Zweedse natuur.",
	},
	{
		title: "Eten & drinken",
		description: "Van surströmming tot kanelbullar — Zweedse culinaire cultuur.",
	},
	{
		title: "Gezondheidszorg",
		description: "Hoe werkt vårdcentral, 1177 en het Zweedse zorgsysteem?",
	},
	{
		title: "Verkeer & rijbewijs",
		description: "Autorijden, körkort en OV in Zweden.",
	},
	{
		title: "Sport in Zweden",
		description: "IJshockey, voetbal en de sportcultuur.",
	},
	{
		title: "Zweedse tradities",
		description: "Kräftskiva, julbord en andere gezellige gewoontes.",
	},
];

function pickRandom(count: number) {
	const shuffled = [...topics];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled.slice(0, count);
}

export default function QASection() {
	const [visible, setVisible] = createSignal(pickRandom(3));

	return (
		<section class="w-full bg-meadow/10">
			<div class="max-w-[800px] mx-auto px-4 py-16">
				<h2 class="text-3xl font-bold text-forest mb-2">
					Gespreksonderwerpen
				</h2>
				<p class="text-base-content/60 mb-8">
					Breng zelf een onderwerp mee en oefen Zweeds over wat jou
					bezighoudt.
				</p>
				<div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
					<For each={visible()}>
						{(topic) => (
							<div class="card bg-white shadow-sm">
								<div class="card-body p-4">
									<h3 class="font-bold text-forest">
										{topic.title}
									</h3>
									<p class="text-sm text-base-content/70">
										{topic.description}
									</p>
								</div>
							</div>
						)}
					</For>
				</div>
				<div class="text-center">
					<button
						type="button"
						class="btn btn-outline border-forest text-forest hover:bg-forest hover:text-white"
						onClick={() => setVisible(pickRandom(3))}
					>
						Andere onderwerpen
					</button>
				</div>
			</div>
		</section>
	);
}
