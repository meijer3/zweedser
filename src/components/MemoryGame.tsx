import { For, createSignal } from "solid-js";
import type { Component } from "solid-js";
import { memoryPairs } from "./memoryIcons";

type IconComponent = Component<Record<string, unknown>>;

interface Card {
	id: number;
	pairId: number;
	lang: "nl" | "sv";
	word: string;
	icon: IconComponent;
}

const PAIRS_PER_ROUND = 6;

function shuffle<T>(arr: T[]): T[] {
	const a = [...arr];
	for (let i = a.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[a[i], a[j]] = [a[j], a[i]];
	}
	return a;
}

function buildDeck(): Card[] {
	const selected = shuffle(memoryPairs).slice(0, PAIRS_PER_ROUND);
	const cards: Card[] = [];
	selected.forEach((pair, i) => {
		cards.push({
			id: i * 2,
			pairId: i,
			lang: "nl",
			word: pair.word,
			icon: pair.nlIcon,
		});
		cards.push({
			id: i * 2 + 1,
			pairId: i,
			lang: "sv",
			word: pair.word,
			icon: pair.svIcon,
		});
	});
	return shuffle(cards);
}

export default function MemoryGame() {
	const [cards, setCards] = createSignal(buildDeck());
	const [flipped, setFlipped] = createSignal<number[]>([]);
	const [matched, setMatched] = createSignal<Set<number>>(new Set());
	const [wrong, setWrong] = createSignal<Set<number>>(new Set());
	const [locked, setLocked] = createSignal(false);
	const [moves, setMoves] = createSignal(0);

	const allMatched = () => matched().size === cards().length;

	function handleClick(card: Card) {
		if (locked()) return;
		if (flipped().includes(card.id)) return;
		if (matched().has(card.id)) return;

		const newFlipped = [...flipped(), card.id];
		setFlipped(newFlipped);

		if (newFlipped.length === 2) {
			setLocked(true);
			setMoves((m) => m + 1);
			const [firstId, secondId] = newFlipped;
			const first = cards().find((c) => c.id === firstId);
			const second = cards().find((c) => c.id === secondId);
			if (!first || !second) return;

			if (first.pairId === second.pairId && first.lang !== second.lang) {
				setTimeout(() => {
					setMatched((prev) => {
						const next = new Set(prev);
						next.add(first.id);
						next.add(second.id);
						return next;
					});
					setFlipped([]);
					setLocked(false);
				}, 500);
			} else {
				setWrong(new Set([first.id, second.id]));
				setTimeout(() => {
					setWrong(new Set<number>());
					setFlipped([]);
					setLocked(false);
				}, 800);
			}
		}
	}

	function newRound() {
		setCards(buildDeck());
		setFlipped([]);
		setMatched(new Set<number>());
		setWrong(new Set<number>());
		setLocked(false);
		setMoves(0);
	}

	return (
		<section class="w-full bg-cream">
			<div class="max-w-[840px] mx-auto px-6 md:px-8 py-[6vw]">
				<h2 class="text-3xl font-bold text-forest mb-2">Valse Vrienden</h2>
				<p class="text-base-content/60 mb-6">
					Nederlands en Zweeds delen dezelfde Germaanse roots en hebben zo'n 80%
					woordoverlap — dat maakt Zweeds een van de makkelijkste talen om te
					leren als Nederlandstalige. Maar pas op: sommige woorden lijken
					hetzelfde, maar betekenen iets heel anders. Vind de Zweeds-Nederlandse
					paren!
				</p>

				<div class="flex items-center gap-4 mb-6">
					{allMatched() && (
						<span class="text-sm font-bold text-meadow">
							Gefeliciteerd! Alle paren gevonden!
						</span>
					)}
					<button
						type="button"
						class="btn btn-sm btn-outline border-forest text-forest hover:bg-forest hover:text-white ml-auto"
						onClick={newRound}
					>
						{allMatched() ? "Volgende ronde" : "Nieuwe kaarten"}
					</button>
				</div>

				<div class="grid grid-cols-3 sm:grid-cols-4 gap-2">
					<For each={cards()}>
						{(card) => {
							const isFlipped = () =>
								flipped().includes(card.id) || matched().has(card.id);
							const isMatched = () => matched().has(card.id);
							const isWrong = () => wrong().has(card.id);
							const Icon = card.icon;
							const nlColors = {
								bg: "#AE1C28",
								stripe: "#FFF",
								bottom: "#21468B",
							};
							const svColors = { bg: "#006AA7", stripe: "#FECC00" };
							const isNl = card.lang === "nl";

							return (
								<button
									type="button"
									class="aspect-4/3 cursor-pointer perspective-500 w-full"
									onClick={() => handleClick(card)}
								>
									<div
										class="relative w-full h-full transition-transform duration-300"
										style={{
											"transform-style": "preserve-3d",
											transform: isFlipped()
												? "rotateY(180deg)"
												: "rotateY(0deg)",
										}}
									>
										{/* Front: shows the icon */}
										<div class="absolute inset-0 rounded-lg flex items-center justify-center backface-hidden border-2 bg-white border-forest/30">
											<Icon class="w-10 h-10 sm:w-12 sm:h-12" />
										</div>

										{/* Back: fullscreen flag with white text box */}
										<div
											class="absolute inset-0 rounded-lg overflow-hidden backface-hidden border-2 transition-colors duration-200"
											style={{ transform: "rotateY(180deg)" }}
											classList={{
												"border-meadow": isMatched(),
												"border-red-400": isWrong(),
												"border-forest/30": !isMatched() && !isWrong(),
											}}
										>
											{/* Flag background */}
											{isNl ? (
												<div
													class="absolute inset-0"
													style={{ filter: "saturate(0.3) brightness(1.2)" }}
												>
													<div
														class="h-1/3 w-full"
														style={{ background: nlColors.bg }}
													/>
													<div
														class="h-1/3 w-full"
														style={{ background: nlColors.stripe }}
													/>
													<div
														class="h-1/3 w-full"
														style={{ background: nlColors.bottom }}
													/>
												</div>
											) : (
												<div
													class="absolute inset-0"
													style={{
														filter: "saturate(0.3) brightness(1.2)",
														background: svColors.bg,
													}}
												>
													<div
														class="absolute top-[40%] left-0 w-full h-[20%]"
														style={{ background: svColors.stripe }}
													/>
													<div
														class="absolute top-0 left-[28%] w-[16%] h-full"
														style={{ background: svColors.stripe }}
													/>
												</div>
											)}
											{/* White text box centered */}
											<div class="absolute inset-0 flex items-center justify-center">
												<span
													class="bg-white/90 px-2 py-1 rounded text-sm sm:text-base font-bold text-forest shadow-sm"
													classList={{
														"ring-2 ring-meadow": isMatched(),
													}}
												>
													{card.word}
												</span>
											</div>
										</div>
									</div>
								</button>
							);
						}}
					</For>
				</div>
			</div>
		</section>
	);
}
