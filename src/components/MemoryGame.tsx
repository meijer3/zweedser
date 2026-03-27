import { For, createSignal } from "solid-js";
import type { Component } from "solid-js";
import { memoryPairs, NlFlag, SvFlag } from "./memoryIcons";

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
					setWrong(new Set());
					setFlipped([]);
					setLocked(false);
				}, 800);
			}
		}
	}

	function newRound() {
		setCards(buildDeck());
		setFlipped([]);
		setMatched(new Set());
		setWrong(new Set());
		setLocked(false);
		setMoves(0);
	}

	return (
		<section class="w-full bg-cream">
			<div class="max-w-[800px] mx-auto px-4 py-16">
				<h2 class="text-3xl font-bold text-forest mb-2">Memory Spel</h2>
				<p class="text-base-content/60 mb-6">
					Vind de paren! Koppel de Nederlandse en Zweedse betekenis van
					hetzelfde woord.
				</p>

				<div class="flex items-center gap-4 mb-6">
					<span class="text-sm text-base-content/60">
						Zetten: {moves()}
					</span>
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

				<div class="grid grid-cols-3 sm:grid-cols-4 gap-3">
					<For each={cards()}>
						{(card) => {
							const isFlipped = () =>
								flipped().includes(card.id) || matched().has(card.id);
							const isMatched = () => matched().has(card.id);
							const isWrong = () => wrong().has(card.id);
							const Icon = card.icon;
							const Flag = card.lang === "nl" ? NlFlag : SvFlag;

							return (
								<button
									type="button"
									class="aspect-square cursor-pointer perspective-500 w-full"
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
										<div class="absolute inset-0 rounded-xl flex items-center justify-center backface-hidden border-2 bg-white border-forest/30">
											<Icon class="w-12 h-12 sm:w-16 sm:h-16" />
										</div>

										{/* Back: shows the word + flag */}
										<div
											class="absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-2 backface-hidden border-2 transition-colors duration-200"
											style={{ transform: "rotateY(180deg)" }}
											classList={{
												"bg-meadow/20 border-meadow": isMatched(),
												"bg-red-100 border-red-400": isWrong(),
												"bg-white border-forest/30":
													!isMatched() && !isWrong(),
											}}
										>
											<Flag class="w-10 h-7 rounded-sm opacity-60" />
											<span class="text-lg sm:text-xl font-bold text-forest">
												{card.word}
											</span>
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
