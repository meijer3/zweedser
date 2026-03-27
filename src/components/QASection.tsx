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

function pickRandom(
	count: number,
	exclude: typeof topics = [],
): typeof topics {
	const available = topics.filter(
		(t) => !exclude.some((e) => e.title === t.title),
	);
	const shuffled = [...available];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled.slice(0, count);
}

function createCard(title: string, description: string): HTMLDivElement {
	const card = document.createElement("div");
	card.className = "topic-card card bg-white shadow-sm absolute inset-0";

	const body = document.createElement("div");
	body.className = "card-body p-4";

	const h3 = document.createElement("h3");
	h3.className = "font-bold text-forest";
	h3.textContent = title;

	const p = document.createElement("p");
	p.className = "text-sm text-base-content/70";
	p.textContent = description;

	body.appendChild(h3);
	body.appendChild(p);
	card.appendChild(body);

	return card;
}

export default function QASection() {
	const [current, setCurrent] = createSignal(pickRandom(3));
	const slotRefs: HTMLDivElement[] = [];
	let animating = false;

	function shuffle() {
		if (animating) return;
		animating = true;

		const next = pickRandom(3, current());
		const duration = 450;

		for (let i = 0; i < 3; i++) {
			const slot = slotRefs[i];
			if (!slot) continue;

			const fromTop = Math.random() < 0.5;
			const delay = i * 80;
			const oldCard = slot.querySelector(".topic-card") as HTMLElement;
			if (!oldCard) continue;

			const newCard = createCard(next[i].title, next[i].description);

			// Position new card off-screen
			newCard.style.transform = fromTop
				? "translateY(-100%)"
				: "translateY(100%)";
			newCard.style.opacity = "0";

			slot.appendChild(newCard);

			setTimeout(() => {
				const ease = "cubic-bezier(0.22, 1, 0.36, 1)";

				// Old card: slide out + fade out
				oldCard.style.transition = `transform ${duration}ms ${ease}, opacity ${duration}ms ${ease}`;
				oldCard.style.transform = fromTop
					? "translateY(100%)"
					: "translateY(-100%)";
				oldCard.style.opacity = "0";

				// New card: slide in + fade in
				newCard.style.transition = `transform ${duration}ms ${ease}, opacity ${duration}ms ${ease}`;
				newCard.style.transform = "translateY(0)";
				newCard.style.opacity = "1";

				// Cleanup
				setTimeout(() => {
					oldCard.remove();
					newCard.style.transition = "";
				}, duration + 10);
			}, delay);
		}

		setTimeout(() => {
			setCurrent(next);
			animating = false;
		}, 3 * 80 + duration + 20);
	}

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
					<For each={current()}>
						{(topic, i) => (
							<div
								ref={(el) => {
									slotRefs[i()] = el;
								}}
								class="relative overflow-hidden min-h-30"
							>
								<div class="topic-card card bg-white shadow-sm absolute inset-0">
									<div class="card-body p-4">
										<h3 class="font-bold text-forest">
											{topic.title}
										</h3>
										<p class="text-sm text-base-content/70">
											{topic.description}
										</p>
									</div>
								</div>
							</div>
						)}
					</For>
				</div>
				<div class="text-center">
					<button
						type="button"
						class="btn btn-outline border-forest text-forest hover:bg-forest hover:text-white"
						onClick={shuffle}
					>
						Andere onderwerpen
					</button>
				</div>
			</div>
		</section>
	);
}
